
import { category } from "../model/Add_category_model.js";
export const Manage_Category_contoller = async (req, res) => {
    let data = await category.find({});
    // console.log(data);
    if (data.length > 0) {
        res.json({ success: true, results: data })
    }
}
