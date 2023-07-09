const Community = require('../../models/communitySchema');
const SocialLink = require('../../models/socialLinkSchema');
const User = require('../../models/userSchema');
const CommunityMember = require('../../models/communityMemberSchema');
const Notification=require('../../models/notificationSchema');



async function createCommunityMember(data) {
    try {
      const { memberId,communityId,role} = data;
      const response = await CommunityMember.create({ memberId,communityId,role });
      return response
    } catch (err) {
      console.log(err);
    }
}

const createNotification=async(req,res)=>{
   
   const {leaderId,memberId,communityId} = req.body;
   const createForm= await createCommunityMember(req.body);
   const getMember=await User.findById(memberId);
   const getCommunity=await Community.findById(communityId);  
   
   try{
    const notifyLeader=new Notification({notification:createForm._id, to: leaderId,message:`${getMember.name} has requested to join ${getCommunity.name} community as ${createForm.role}`});
    await notifyLeader.save();
    return res.status(200).json(notifyLeader);
   }
   catch(err){
    console.log(err);
    
   }

}
const updateNotification=async(req,res)=>{

     const {notificationId,verify}=req.body;

     try{
        const updateId=await Notification.findById(notificationId).populate('notification');
        const community=await Community.findById(updateId.notification.communityId);
        let notifyUser;
        if(verify){
          updateId.notification.verified="Verified";
          notifyUser=new Notification({notification:updateId.notification._id, to:updateId.to ,message:`${community.name} has selected you  for ${updateId.notification.role} role}`});

        }
        else{
          updateId.notification.verified="Rejected";
          notifyUser=new Notification({notification:updateId.notification, to:updateId.memberId ,message:`${community.name} has rejected you  for ${updateId.notification.role} role`});
        }
        await Notification.findByIdAndDelete(notifyUser._id);

        await notifyUser.save();
        await updateId.save();
              
        return res.status(200).json({data:notifyUser});
     }
     catch(err){
        console.log(err);
     }
}
    

module.exports={
    createNotification,updateNotification
}
