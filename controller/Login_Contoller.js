import { Signup } from "../model/signup_model.js";
import bcrypt from 'bcrypt';
export const Login_Contoller = async (req,res) => {
    let data = await Signup.findOne({email: req.body.email});
    if(data == null) {
        res.json({message: "invalid user", success: false});
    }
    else {
        bcrypt.compare(req.body.password, data.password, (error, result) => {
            if(result) { 
                res.json({message: "Login Successfully", success: true}); 
                }
            else {
                res.json({message: "invalid user", success: false});
            }
            } )
    }
}  