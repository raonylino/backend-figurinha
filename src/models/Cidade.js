import mongoose from "mongoose";

const cidadeschema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        estado: {type:String}
    },
    {
        versionKey: false
    }
)

const cidades = mongoose.model("cidades",cidadeschema);

export default cidades; 