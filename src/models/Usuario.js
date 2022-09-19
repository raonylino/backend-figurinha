import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
    {
        uid:{type: String},
        nome:{type: String, required: true},
        telefone: {type:String},
        email: {type:String}
    },
    {
        versionKey: false
    }
)

const usuarios  = mongoose.model("usuarios",usuariosSchema);

export default usuarios; 