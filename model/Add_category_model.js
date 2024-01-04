import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ); 
const AddCategorySchema = mongoose.Schema(
    {
        job_category: String,
    
     }
)
export const category = mongoose.model("category", AddCategorySchema);