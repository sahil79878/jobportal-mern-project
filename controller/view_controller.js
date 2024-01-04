import { Jobs } from "../model/Post_Job_model.js";
export const view_controller = async (req, res) => {
    try {
        let result = await Jobs.findById({ _id: req.params.viewId});
        if (result != null) {
            res.json({ result, success: true });
        }
    } catch (error) {
        console.log(error);
    }

}