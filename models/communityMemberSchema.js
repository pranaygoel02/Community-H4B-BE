const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    communityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community",
    },
    role: {
        type: String,
    },
    verified: {
        type: String,
        enum: ["Verified", "Pending","Rejected"],  
        default:"Pending"
    }
})

const CommunityMember = mongoose.model("CommunityMember", schema);

module.exports = CommunityMember;