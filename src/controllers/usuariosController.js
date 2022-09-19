import usuarios from "../models/Usuario.js";

class usuarioController {

    static listarusuarios = (req,res) =>{
        usuarios.find((err,usuarios)=>{
            res.status(200).json(usuarios);
          });
    } 
    static listarusuarioPorId = (req,res)=>{
        const id = req.params.uid;
        
        usuarios.findById(uid, (err,usuarios)=>{
            if(err){
                res.status(400).send({message:`${err.message} - Id do usuario não Localizada`})
            }else{
                res.status(200).send(usuarios);
            }

        })

    }
    static cadastrarusuarios = (req,res) =>{
        let usuario = new usuarios(req.body);
        usuario.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao Cadastrar usuario.`});
            }else{
                res.status(201).send(usuario.toJSON())
            }
        });

    }

    static atualizarusuarios = (req,res) => {
        const id = req.params.uid;
        usuarios.findByIdAndUpdate(uid, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'usuario Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            } 
        })

    }
    static excluirusuarios = (req,res) =>{
        const id = req.params.uid;

        usuarios.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message:'usuario removido com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Erro ao deletar o usuario`});
            }
        });

    }
}

export default usuarioController;