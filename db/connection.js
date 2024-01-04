import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://sahilkhan71112:zGnUK9rWC0IJ77PZ@jobportal.wb7rjtz.mongodb.net/?retryWrites=true&w=majority' ).then(()=>{
    console.log("Connection successfully")
}).catch((error)=>{
    console.log(error)
})
