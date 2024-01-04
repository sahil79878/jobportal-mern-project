import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ); 
const applyJobSchema = mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        address: String,
        message: String,
        file: String,
    }
)
export const apply = mongoose.model("applyjob", applyJobSchema);