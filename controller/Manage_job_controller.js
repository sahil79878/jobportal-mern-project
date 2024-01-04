import { Jobs } from "../model/Post_Job_model.js";
export const Manage_job_controller = async (req, res) => {
    let data = await Jobs.find({});
    // console.log(data);
    if(data.length > 0) {
        res.json({success: true, results: data })
    }
 }