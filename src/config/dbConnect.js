import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:45658216741@cluster0.n53mz.mongodb.net/figurinhas");

let db = mongoose.connection;

export default db;