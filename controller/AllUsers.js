import { Signup } from "../model/signup_model.js"
export const AllUsers = async (req, res) => {
    let data = await Signup.find({});
    //console.log(data);
    if(data.length > 0) {
        res.json({success: true, results: data })
    }
}