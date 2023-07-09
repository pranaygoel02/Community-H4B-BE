const jwt = require("jsonwebtoken");
const User = require("../../models/userSchema");
const validatePassword = require("../../middleware/password");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(401).json({ message: 'User with same email already exists' });
        const accessToken = jwt.sign({email, password}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_TIME });
        const refreshToken = jwt.sign({email, password}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_TIME });
        const user = new User({ name, email, password, refreshToken });
        await user.save();
        res.status(201).json({ message: 'User Created Successfully', accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(401).json({ message: 'User does not exist' });
        const isPasswordCorrect = await validatePassword(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(401).json({ message: 'Invalid password' });
        const accessToken = req.accessToken;
        const refreshToken = req.refreshToken;
        existingUser.refreshToken = refreshToken;
        await existingUser.save();
        res.status(200).json({ message: 'Logged in successfully', accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logoutUser = async (req, res) => {
    const {email} = req.user;
    const refreshToken = req.refreshToken;
    console.log(refreshToken);
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message: "User does not exist"});
        console.log(user);
        const refreshTokenInDB = user.refreshToken;
        console.log(refreshTokenInDB);
        if(!refreshTokenInDB) return res.status(401).json({message: "User is already logged out"})
        if(refreshTokenInDB !== refreshToken) res.status(401).json({message: "Invalid token"});
        await User.updateOne({email},{$set:{refreshToken: null, accessToken: null}});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { registerUser, loginUser, logoutUser };