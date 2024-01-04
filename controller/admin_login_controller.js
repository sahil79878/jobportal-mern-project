import { AdminLogin } from '../model/login_model.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
export const AdminLoginController = async (req,res) => {
    //console.log(req.body);
    let data = await AdminLogin.findOne({email: req.body.email});
    if(data == null) {
        res.json({message: "invalid user", success: false});
    }
    else {
        bcrypt.compare(req.body.password, data.password, async (error, result) => {
            if(result) { 
                // token 
                let token = await jwt.sign({uid: data._id}, process.env.SECRATE_KEY, {expiresIn: '1hr'});
                
                //console.log(token);
                if(token){
                    res.json({message: "Admin Login Successfully", success: true, token: token}); 
                }
                }
            else {
                res.json({message: "invalid user", success: false});
            }
            } )
    }
}   