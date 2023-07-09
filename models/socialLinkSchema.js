const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'github', 'website', 'discord', 'other'],
    },
    link: {
        type: String,
        required: true,
    }
})

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

module.exports = SocialLink;