import express  from "express";
import cidadesController from "../controllers/cidadesController.js";

const router = express.Router();

router
    .get("/cidades",cidadesController.listarCidades)
    .get("/cidades/:id",cidadesController.listarCidadePorId)
    .post("/cidades",cidadesController.cadastrarCidades)
    .put("/cidades/:id",cidadesController.atualizarCidades)
    .delete("/cidades/:id",cidadesController.excluirCidades)

export default router;    