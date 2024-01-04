import { category } from "../model/Add_category_model.js";
export const Delete_Category_Controller = async (req, res) => {
    // console.log(req.params.delId);
    let delRes = await category.findByIdAndDelete({_id: req.params.delId});
    if(delRes){
        res.json({message: "User Successfully Delete", success: true});
    }
}