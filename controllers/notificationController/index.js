const Community = require("../../models/communitySchema");
const SocialLink = require("../../models/socialLinkSchema");
const User = require("../../models/userSchema");
const CommunityMember = require("../../models/communityMemberSchema");
const Notification = require("../../models/notificationSchema");

async function createCommunityMember(data) {
  try {
    const { memberId, communityId } = data;
    const response = await CommunityMember.create({ memberId, communityId });
    return response;
  } catch (err) {
    console.log(err);
  }
}

const createNotification = async (req, res) => {
  const { leaderId, communityId } = req.body;
  const { email } = req.user;

  const user = await User.findOne({ email });
  console.log(String(user._id), leaderId);
  if (leaderId === String(user._id)) {
    return res.status(401).json({ message: "You are the leader of the community. You cannot join the community!" });
  }
  try {

    const createForm = await createCommunityMember({ memberId: user._id, communityId});
    const getMember = await User.findById(user?._id);
    const getCommunity = await Community.findById(communityId);
    const notifyLeader = new Notification({
      notification: createForm._id,
      to: leaderId,
      message: `${getMember.name} (${getMember.email}) has requested to join ${getCommunity.name} community.`,
    });
    await notifyLeader.save();
    return res.status(200).json(notifyLeader);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message || "Something went wrong!" });
  }
};
const updateNotification = async (req, res) => {
  const { notificationId, verify } = req.body;
  console.log(notificationId, verify);
  try {
    const notification = await Notification.findById(notificationId).populate('notification')
    const createdUserId = notification.notification._id;
    const community = await Community.findById(notification.notification.communityId);
    if(verify) {
      await CommunityMember.updateOne({_id: createdUserId},{$set: {verified: 'Verified'}});
      await User.updateOne({_id: notification.notification.memberId},{$push: {communities: community._id}});
      await Community.updateOne({_id: community._id},{$push: {members: notification.notification.memberId}});
    }
    else {
      await CommunityMember.deleteOne({_id: createdUserId});
    }
    await Notification.create({
      to: notification.notification.memberId,
      message: `Your request to join ${community.name} has been ${verify ? 'approved' : 'rejected'}.`,
      showBtns: false
    })
    await Notification.findByIdAndDelete(notificationId);

    return res.status(200).json({ message: "User status updated successfully!"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message || "Something went wrong!" });
  }
};

const getUserNotifications = async (req, res) => {
  const {email} = req.user;

  try {
    const user = await User.findOne({email});
    const notifications = await Notification.find({to: user._id}).populate('notification');
    return res.status(200).json({notifications});
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createNotification,
  updateNotification,
  getUserNotifications
};
