const jwt = require('jsonwebtoken');

const generateAccessToken = async (req,res,next) => {
    const { email, password } = req.body;
    const accessToken = jwt.sign({email, password}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_TIME });
    const refreshToken = jwt.sign({email, password}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_TIME });
    req.accessToken = accessToken;
    req.refreshToken = refreshToken;
    next();
}

const validateAccessToken = (req,res,next) => {
    console.log(req.headers);
    const $token = req.headers['authorization'];
    const token = $token && $token.split(' ')[1];
    const type = $token && $token.split(' ')[2];
    if (token == null) throw new Error("No token provided");
    const user = jwt.verify(token, type === 'REFRESH' ? process.env.REFRESH_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) res.status(403).json({message: "Invalid token"});
        return user;
    })
    req.user = user;
    if(type === 'REFRESH')
        req.refreshToken = token;
    else if(type === 'ACCESS')
        req.accessToken = token;
    next()
}

module.exports = {generateAccessToken, validateAccessToken};