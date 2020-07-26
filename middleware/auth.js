const jwt = require("jsonwebtoken");
//next is for after authentication what we have to do
const auth = (req,res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res
                .status(401)
                .json({msg: "No Authentication Token, authorisation denied"});
        //verifiying the token is matched or not
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified)
            return res
                .status(401)
                .json({msg:"Token verification failed, authorisation denied"});

        req.user=verified.id;
        next();
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

module.exports = auth;