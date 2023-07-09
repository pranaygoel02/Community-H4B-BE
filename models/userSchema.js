const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const SocialLink = require("./socialLinkSchema");
const CommunityMember = require("./communityMemberSchema");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  skills: {
    type: String,
  },
  phone: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  image: {
    type: String,
  },
  imageId: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  refreshToken: String,
  communities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: CommunityMember,
  }],
  socialLinks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: SocialLink,
  }],
});

schema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) return next(err);
        this.password = passwordHash;
        next();
    });
})

const User = mongoose.model("User", schema);

module.exports = User;
