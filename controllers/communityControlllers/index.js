const Community = require('../../models/communitySchema');
const SocialLink = require('../../models/socialLinkSchema');
const User = require('../../models/userSchema');
const CommunityMember = require('../../models/communityMemberSchema');

const createCommunity = async (req, res) => {
    console.log(req.body);
    const { name, description, location, locationName, socialLinks, category, image, imageId, email: communityEmail } = req.body;
    const {email} = req.user
    const user = await User.findOne({ email });
    console.log(user);
    res.status(201).json({message: 'Community created successfully!'});
    try {
        const community = new Community({ name, category, description, location, locationName, leaderId: user._id, image, imageId, email: communityEmail });
        await community.save();
        await socialLinks.forEach(async (socialLink) => {
            const { name, link } = socialLink;
            const newSocialLink = await SocialLink.create({ name, link });
            await Community.updateOne({ _id: community._id }, { $push: { socialLinks: newSocialLink._id } });
        })
        const communityMember = await CommunityMember.create({ communityId: community._id, role: "Leader", verified: "Verified", memberId: user._id });
        await User.updateOne({ email }, { $push: { communities: community._id } });
        await Community.updateOne({ _id: community._id }, { $push: { members: communityMember._id } });
        res.status(201).json({message: 'Community created successfully!',community});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find().populate("members").populate("socialLinks");
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommunityById = async (req, res) => {
    try {
        const { communityId } = req.params;
        const community = await Community.findById(communityId).populate("members").populate("socialLinks");
        if (community) {
            res.status(200).json(community);
        } else {
            res.status(404).json({ message: "Community not found!" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCommunity = async (req, res) => {
    const {email} = req.user;
    const { communityId } = req.params;
    const user = await User.findOne({ email });
    const community = await Community.findById(communityId);
    if (community.leaderId !== user._id) {
        return res.status(401).json({ message: "You are not authorized to update this community!" });
    }
    const { name, description, location, locationName, socialLinks, category, image, imageId, email: communityEmail } = req.body;

    try {

        // update community
        if(name) {
            community.name = name;
        }
        if(description) {
            community.description = description;
        }
        if(location) {
            community.location = location;
        }
        if(locationName) {
            community.locationName = locationName;
        }
        if(category) {
            community.category = category;
        }
        if(image) {
            community.image = image;
        }
        if(imageId) {
            community.imageId = imageId;
        }
        if(communityEmail) {
            community.communityEmail = communityEmail;
        }

        if(community.socialLinks?.length > 0) {
            await SocialLink.deleteMany({ _id: { $in: community.socialLinks } });
        }

        community.socialLinks = []
        await community.save();

        // create social links
        if(socialLinks?.length > 0) {
            await socialLinks.forEach(async (socialLink) => {
                const { name, link } = socialLink;
                const newSocialLink = await SocialLink.create({ name, link });
                // push social links to user
                await Community.updateOne({ _id: communityId }, { $push: { socialLinks: newSocialLink._id } });
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createCommunity,
    getAllCommunities,
    getCommunityById,
    updateCommunity
}