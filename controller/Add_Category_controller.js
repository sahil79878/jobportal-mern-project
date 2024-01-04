import { category } from "../model/Add_category_model.js";
export const Add_Category_controller = async (req,res) => {
    // console.log(req.body);
   
    const { job_category} = req.body;
    let result = await category({job_category });
    let data = await result.save();
        if(data){
            res. json({message: "category added successfully...", success: true});
        }
        else{
            res. json({message: "error", success: false});
        }
}