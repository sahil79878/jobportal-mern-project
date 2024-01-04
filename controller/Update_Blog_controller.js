import { Jobs } from '../model/Post_Job_model.js';
import fs from 'fs';
import path from 'path';
export const Update_Blog_controller = async (req, res) => {
    // console.log('controller', req.body);
    // const directoryPath = path.join(__dirname);
    // console.log(directoryPath)
    //console.log(`../public/uploads/${req.body.image}`);
     fs.unlink('./public/uploads/' + req.body.image, (error)=>{
         if(error) { console.log('error'); }
     })
    // console.log(req.body);
    
    const { _id, job_category, job_title, company_name, job_type, salary, location, description } = req.body;
    let result = await Jobs.findByIdAndUpdate({ _id }, { job_category, job_title, company_name, job_type, salary, location,description, image: req.file.filename });
    if (result) {
        res.json({ message: "User successfully updated..", success: true });
    }
}