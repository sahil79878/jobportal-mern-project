import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ); 
const adminLoginSchema = mongoose.Schema(
    {
        email: String,
        password: String,
        status: String
    }
)
export const AdminLogin = mongoose.model("admin_login", adminLoginSchema);
