import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kapilchauhan221999:9113M7reTavVQPn1@cluster1.wveh7p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(()=>console.log("DB Connected"))
}
