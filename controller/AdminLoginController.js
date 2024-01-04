import { AdminLogin } from '../model/login_model.js';
import bcrypt from 'bcrypt';
export const AdminLoginController = async (req,res) => {
    //console.log(req.body);
    let data = await AdminLogin.findOne({email: req.body.email});
    if(data == null) {
        res.json({message: "invalid user", success: false});
    }
    else {
        bcrypt.compare(req.body.password, data.password, (error, result) => {
            if(result) { 
                res.json({message: "Admin Login Successfully", success: true}); 
                }
            else {
                res.json({message: "invalid user", success: false});
            }
            } )
    }
}  