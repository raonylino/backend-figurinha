import figurinhas from "../models/Figurinha.js";

class figurinhasController {
    
    static listarfigurinhas = (req,res) =>{
        figurinhas.find()
        .populate('usuario')
        .populate('cidade')
        .exec((err,figurinhas)=>{
            res.status(200).json(figurinhas);
          });
    } 
    static listarFigurinhasPorId = (req,res)=>{
        const codigo = req.params.codigo;
        
        figurinhas.find({
            where: { codigo: codigo}
        })
        .populate('usuario','nome')
        .populate('cidade','nome')
        .exec((err,figurinhas)=>{
            if(err){
                res.status(400).send({message:`${err.message} - Id da Figurinha não Localizada`})
            }else{
                res.status(200).send(figurinhas);
            }

        })

    }
    static cadastrarfigurinhas = (req,res) =>{
        let livro = new figurinhas(req.body);
        livro.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - Falha ao Cadastrar Figurinha.`});
            }else{
                res.status(201).send(livro.toJSON())
            }
        });

    }

    static atualizarfigurinhas = (req,res) => {
        const id = req.params.id;
        figurinhas.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message:'Figurinha Atualizada com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            } 
        })

    }
    static excluirfigurinhas = (req,res) =>{
        const id = req.params.id;

        figurinhas.findByIdAndDelete(id, (err)=> {
            if(!err){
                res.status(200).send({message:'figurinha removido com sucesso'});
            }else{
                res.status(500).send({message:`${err.message} - Erro ao deletar a Figurinha`});
            }
        });

    }
    static listarFigurinhasPorcidade = (req,res)=>{
        const cidade = req.query.cidade;

        figurinhas.find({'cidade':cidade},{},(err, figurinhas)=>{
            res.status(200).send(figurinhas);
        })
    }
}

export default figurinhasController;