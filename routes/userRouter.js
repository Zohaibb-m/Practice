const router=require('express').Router()
const userCtrl = require('../controllers/userCtrl')

//Register Route
router.post("/register",userCtrl.registerUser)

//Login Route
router.post("/login",userCtrl.loginUser)

module.exports=router