import mongoose from "mongoose";

const figurinhaschema = new mongoose.Schema(
    {
        id:{type: String},
        codigo:{type:String, required: true},
        usuario:{type:mongoose.Schema.Types.ObjectId,ref:'usuarios', required: true},
        cidade:{type:mongoose.Schema.Types.ObjectId,ref:'cidades', required: true},
        classe:{type:String}
    }
);

const figurinhas = mongoose.model('figurinhas', figurinhaschema);

export default figurinhas; 