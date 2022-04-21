const Users = require('../models/userModel')

const userCtrl={
    registerUser: (req,res)=>{
        try {
            res.json(req.body);
            res.json("Register a User");
        } catch (err) {
            return res.status(500).json(err.message);
        }
    },
    loginUser: (req,res)=>{
        try {
            res.json("Login a User");
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = userCtrl