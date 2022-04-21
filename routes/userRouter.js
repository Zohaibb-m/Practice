const router=require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth=require('../middleware/auth')
//Register Route
router.post("/register",userCtrl.registerUser)

//Login Route
router.post("/login",userCtrl.loginUser)

//Verify Route
router.get("/verify",userCtrl.verifiedUser)

module.exports=router 