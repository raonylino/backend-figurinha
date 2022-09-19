import express  from "express";
import figurinhasController from "../controllers/figurinhasController.js";

const router = express.Router();

router
    .get("/figurinhas",figurinhasController.listarfigurinhas)
    .get("/figurinhas/busca",figurinhasController.listarFigurinhasPorcidade)
    .get("/figurinhas/:codigo",figurinhasController.listarFigurinhasPorId)
    .post("/figurinhas",figurinhasController.cadastrarfigurinhas)
    .put("/figurinhas/:id",figurinhasController.atualizarfigurinhas)
    .delete("/figurinhas/:id",figurinhasController.excluirfigurinhas)

export default router;    