const mongoose = require('mongoose');
const SocialLink = require('./socialLinkSchema');
const CommunityMember = require('./communityMemberSchema');

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    description: String,
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: CommunityMember,
    }],
    category: [String],
    socialLinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: SocialLink,
    }],
    image: String,
    imageId: String,
    location: [String],
    locationName: String,
    leaderId: {
        type: String,
        required: true,
    }
})

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;