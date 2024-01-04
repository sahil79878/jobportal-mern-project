    import { category } from "../model/Add_category_model.js";
    export const Update_Category_controller = async (req, res) => {
        // console.log(req.body);
        const {job_category  } = req.body;
        let result = await category.findByIdAndUpdate( { _id: req.body._id}, {job_category})
        if (result) {
            res.json({ message: "User successfully updated..", success: true });
        }
    }