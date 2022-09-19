import express from "express";
import figurinhas from "./figurinhasRoutes.js";
import usuarios from "./usuariosRoutes.js";
import cidades from "./cidadesRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"colecao de figurinhas"});
    });

    app.use(
        express.json(),
        figurinhas,
        usuarios,
        cidades  
    )
}

export default routes;