
import { apply } from "../model/Job_Apply_model.js";

export const Apply_Controller = async (req, res) => {

    // console.log(req.body)
    const { first_name, last_name, email, address, message } = req.body;
    let result = await apply({ first_name, last_name, email, address, message, file: req.file.filename })
    let data = await result.save();
    if (data) {
        res.json({ message: "Job apply successfully...", success: true });
    }
    else {
        res.json({ message: "error", success: false });
    }
}

