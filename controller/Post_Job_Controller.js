
import { Jobs } from "../model/Post_Job_model.js";
export const Post_Job_controller = async (req,res) => {
    //console.log(req.body);
   
    const { job_category, job_title, company_name, job_type, salary,location,description} = req.body;
    let result = await Jobs({job_category, job_title, company_name, job_type, salary,location,description, image: req.file.filename});
    let data = await result.save();
        if(data){
            res. json({message: "Job added successfully...", success: true});
        }
        else{
            res. json({message: "error", success: false});
        }
}