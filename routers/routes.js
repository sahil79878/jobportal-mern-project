import express from 'express';
export const router = express.Router();

import { AdminLoginController } from '../controller/admin_login_controller.js';

import { AuthMiddleware } from '../middleware/auth_middleware.js';
import { EditUser_controller } from '../controller/EditUser_Controller.js';
import { Update_controller } from '../controller/Update_Controller.js';

import multer from 'multer';
import { Post_Job_controller } from '../controller/Post_Job_Controller.js';
import { Manage_job_controller } from '../controller/Manage_job_controller.js';
import { Delete_Job_controller } from '../controller/Delete_Job_controller.js';
import { Update_Blog_controller } from '../controller/Update_Blog_controller.js';
import { EditJob_controller } from '../controller/EditJob_controller.js';
import { view_controller } from '../controller/view_controller.js';
import { Add_Category_controller } from '../controller/Add_Category_controller.js';
import { Manage_Category_contoller } from '../controller/Manage_Category_contoller.js';
import { Delete_Category_Controller } from '../controller/Delete_Category_contoller.js';
import { SignupController } from '../controller/Signup_Controller.js';
import { Login_Contoller } from '../controller/Login_Contoller.js';
import { AllUsers } from '../controller/AllUsers.js';
import { Update_Category_controller } from '../controller/Update_Category_controller.js';
import { EditCategory_controller } from '../controller/EditCategory_controller.js';
import { Apply_Controller } from '../controller/Apply_Controller.js';
import { Applied_job_controller } from '../controller/Applied_job_controller.js';
import { DeleteUser_Controller } from '../controller/DeleteUser_Controller.js';




// POST Request ||  Signup
router.post('/signup',SignupController);
// POST Request  ||  user login
router.post('/login',Login_Contoller);
// POST Request  ||  admin login
router.post('/adminlogin', AdminLoginController);
// GET Request  || get all users
router.get("/all_users", AuthMiddleware,AllUsers);
// delete request || delete user 
router.get("/delete_user/:delId",AuthMiddleware, DeleteUser_Controller);
// Edit Request || Edit User 
router.get('/edit_user/:userId', AuthMiddleware, EditUser_controller);
// Update Request || Update User
router.post("/update_user", AuthMiddleware, Update_controller);

//job post new request|| add post

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  //mange request
  router.get("/manage_job_user", Manage_job_controller)

// post new job
router.post('/post_new_job',   upload.single('logo') , Post_Job_controller);
// delete request || delete user 
router.get("/delete_job/:delId", Delete_Job_controller);
// Edit Request || Edit User 
router.get('/edit_jobs/:jobId',EditJob_controller );
//update job user
router.put("/update_job_user",upload.single('logo'), Update_Blog_controller)
// view Request || view job 
router.get('/view_job/:viewId', view_controller );
// post category
router.post('/add_category',  Add_Category_controller)
//manage request
router.get('/manage_category',Manage_Category_contoller)
//delete category
router.get('/delete_category/:delId', Delete_Category_Controller)
//edit category
router.get('/edit_category/:userId',EditCategory_controller)
//update category
router.post('/update_category', Update_Category_controller)

//apply job
router.post("/apply_job", upload.single('logo'),Apply_Controller)

//manage apply job
router.get('/applied_job', Applied_job_controller)