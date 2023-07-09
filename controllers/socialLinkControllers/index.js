const SocialLink = require('../../models/socialLinkSchema');
const User = require('../../models/userSchema');
const Community = require('../../models/communitySchema');

const createSocialLink = async (req, res) => {
    const { name, link } = req.body;
    try {
        const socialLink = await SocialLink.create({ name, link });
        res.status(201).json(socialLink);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserSocialLinks = async (req, res) => {
    const { userId } = req.params;
    try {
        const socialLinks = await User.findById(userId,{socialLinks: 1}).populate('socialLinks');
        res.status(200).json(socialLinks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCommunitySocialLinks = async (req, res) => {
    const { communityId } = req.params;
    try {
        const socialLinks = await Community.findById(communityId,{socialLinks: 1}).populate('socialLinks');
        res.status(200).json(socialLinks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateSocialLink = async (req, res) => {
    const { socialLinkId } = req.params;
    const { name, link } = req.body;
    try {
        const updatedSocialLink = await SocialLink.updateOne(socialLinkId, { $set: { name, link} }, { new: true, upsert: true });
        res.status(200).json(updatedSocialLink);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteSocialLink = async (req, res) => {
    const { socialLinkId } = req.params;
    try {
        const deletedSocialLink = await SocialLink.deleteOne(socialLinkId);
        res.status(200).json(deletedSocialLink);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createSocialLink,
    getUserSocialLinks,
    getCommunitySocialLinks,
    updateSocialLink,
    deleteSocialLink
}