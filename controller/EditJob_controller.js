import { Jobs } from "../model/Post_Job_model.js";
export const EditJob_controller = async (req, res) => {
    try {
        let result = await Jobs.findById({ _id: req.params.jobId });
        if (result != null) {
            res.json({ result, success: true });
        }
    } catch (error) {
        console.log(error);
    }

}