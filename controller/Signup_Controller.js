import bcrypt from 'bcrypt';
import { Signup } from '../model/signup_model.js';
export const SignupController = async (req, res) => {
    // check email i exists or not
    let data = await Signup.find({ email: req.body.email });
    //console.log(data);
    if (data.length > 0) {
        res.json({ message: "email already exists", success: false });
    }
    else {
        // bcrypt password
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            // Store hash in your password DB.
            if (err) {
                res.json({ message: 'invalid', success: false });
            }
            else {
                req.body.password = hash;
                const { first_name, last_name, email, password, location } = req.body;
                const user = Signup({ first_name, last_name, email, password, location });
                let result = await user.save();
                // console.log(result);
                if (result) {
                    res.json({ message: "Signup Successfully", success: true });
                }
                else {
                    res.json({ message: "Error", success: false });
                }
            }
        });
    }





}
