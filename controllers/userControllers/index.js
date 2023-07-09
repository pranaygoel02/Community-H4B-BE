const User = require("../../models/userSchema");
const SocialLink = require("../../models/socialLinkSchema");
const Community = require("../../models/communitySchema");
const CommunityMember = require("../../models/communityMemberSchema");

const updateUser = async (req, res) => {
    const {email} = req.user;
    const { socialLinks, communities, skills, phone, country, state, password, image, imageId, bio } = req.body;    
    console.log(socialLinks, communities);
    const user = await User.findOne({ email });
    try {
        // update user
        if(bio) {
            user.bio = bio;
        }
        if(skills) {
            user.skills = skills;
        }
        if(phone) {
            user.phone = phone;
        }
        if(country) {
            user.country = country;
        }
        if(state) {
            user.state = state;
        }
        if(password) {
            user.password = password;
        }

        if(image) {
            user.image = image;
        }
        if(imageId) {
            user.imageId = imageId;
        }
        
        if(user.socialLinks?.length > 0) {
            await SocialLink.deleteMany({ _id: { $in: user.socialLinks } });
        }
        
        user.socialLinks = [];

        
        await user.save();


        // create social links
        if(socialLinks?.length > 0) {
            await socialLinks.forEach(async (socialLink) => {
                const { name, link } = socialLink;
                const newSocialLink = await SocialLink.create({ name, link });
                // push social links to user
                await User.updateOne({ email }, { $push: { socialLinks: newSocialLink._id } });
            });
        }
        // create community member
        if(communities?.length > 0) {
            await communities.forEach(async (community) => {
                const { $id, role } = community;
                const newCommunityMember = await CommunityMember.create({ communityId: $id, role, verified: "Pending" });
                // push communities to user
                await User.updateOne({ email }, { $push: { communities: newCommunityMember._id } });
                await Community.updateOne({ _id: $id }, { $push: { members: newCommunityMember._id } });
            })
        }
        res.status(201).json({ message: "User updated successfully!" });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const getUser = async (req, res) => {
    const {email} = req.user;
    try {
        const user = await User.findOne({ email }).populate("communities").populate("socialLinks");
        res.status(200).json({ user });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    updateUser,
    getUser,
}