import { apply } from "../model/Job_Apply_model.js";
export const Applied_job_controller = async (req, res) => {
    let data = await apply.find({});
    // console.log(data);
    if(data.length > 0) {
        res.json({success: true, results: data })
    }
 }