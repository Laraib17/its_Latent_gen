import {generateKey, generateToken} from "authenticator"
import {Router}from "express";
const router=Router();
router.post("/signup",(req,res)=>{
    const phone_no=req.body.phone_no;
    const totp=generateToken(phone_no+"Sign up");
    res.json({totp});
});
router.post("/signup/verify",(req,res)=>{

});
export default router;