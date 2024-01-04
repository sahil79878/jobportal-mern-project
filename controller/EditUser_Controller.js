import { Signup } from "../model/signup_model.js";
export const EditUser_controller = async (req,res) => {
    try {
        let result = await  Signup.findById({_id: req.params.userId});
        if(result != null){
            res.json({result, success: true });
        }     
    } catch (error) {
        console.log(error);
    }
   
}