import { category } from "../model/Add_category_model.js";

export const EditCategory_controller = async (req,res) => {
    try {
        let result = await  category.findById({_id: req.params.userId});
        if(result != null){
            res.json({result, success: true });
        }     
    } catch (error) {
        console.log(error);
    }
   
}