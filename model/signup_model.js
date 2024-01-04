import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ); 
const signupSchema= mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        location: String
    }
)
export const Signup = mongoose.model("signup", signupSchema);             