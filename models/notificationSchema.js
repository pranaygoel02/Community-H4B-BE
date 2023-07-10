const mongoose = require("mongoose");

const CommunityMember = require("./communityMemberSchema");
const UserModel = require("./userSchema");

const notificationSchema = new mongoose.Schema({
  notification: { type: mongoose.Schema.Types.ObjectId, ref: CommunityMember },
  to: { type: mongoose.Schema.Types.ObjectId, ref: UserModel   },
  message:{type:String},
  showBtns: { type: Boolean, default: true },
});


const NotificationModel = mongoose.model(
  "NotificationModel",
  notificationSchema
);

module.exports = NotificationModel;
