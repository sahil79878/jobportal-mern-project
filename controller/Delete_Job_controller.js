import { Jobs } from "../model/Post_Job_model.js";

export const Delete_Job_controller = async (req,res) =>{
    let delRes = await Jobs.findByIdAndDelete({_id: req.params.delId});
    if(delRes){
        res.json({message: "user succesfully Delete", success:true})
    }
}