import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://mongodb+srv://kapilchauhan221999:<password>@cluster1.wveh7p7.mongodb.net/').then(()=>console.log("DB Connected"))
}
