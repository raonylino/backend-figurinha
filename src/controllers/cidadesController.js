import cidades from "../models/Cidade.js";

class cidadeController {

    static listarCidades = (req,res) =>{
        cidades.find((err,cidades)=>{
            res.status(200).json(cidades);
          });
    } 
    static listarCidadePorId = (req,res)=>{
        const id = req.params.id;
        
        cidades.findById(id, (err,cidades)=>{
            if(err){
                res.status(400).send({message:`${err.message} - Id da Cidade não Localizada`})
            }else{
                res.status(200).send(cidades);
            }

        })

    }
    static cadastrarCidades = (req,res) =>{
        let cidade = new cidades(req.body);
        cidade.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao Cadastrar a Cidade.`});
            }else{
                res.status(201).send(cidade.toJSON())
            }
        });

    }

    static atualizarCidades = (req,res) => {
        const id = req.params.id;
        cidades.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'cidade Atualizada com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            } 
        })

    }
    static excluirCidades = (req,res) =>{
        const id = req.params.id;

        cidades.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message:'cidade removida com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Erro ao deletar a cidade`});
            }
        });

    }
}

export default cidadeController;