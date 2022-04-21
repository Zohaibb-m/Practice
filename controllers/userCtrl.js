const userCtrl={
    registerUser: (req,res)=>{
        res.json("Register a User");
    },
    loginUser: (req,res)=>{
        res.json("Login a User");
    }
}

module.exports = userCtrl