import { Signup } from '../model/signup_model.js';
export const Update_controller = async (req, res) => {
    //console.log(req.body);
    const { first_name, last_name, email, password, location } = req.body;
    let result = await Signup.findByIdAndUpdate({ _id: req.body._id }, { first_name, last_name, email, password, location })
    if (result) {
        res.json({ message: "User successfully updated..", success: true });
    }
}