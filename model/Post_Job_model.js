import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ); 
const postJobSchema = mongoose.Schema(
    {
        job_category: String,
        job_title: String,
        company_name: String,
        job_type: String,
        salary: String,
        location: String,
        description: String,
        image: String,
    }
)
export const Jobs = mongoose.model("job", postJobSchema);