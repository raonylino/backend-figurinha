import express  from "express";
import usuarioController from "../controllers/usuariosController.js";

const router = express.Router();

router
    .get("/usuarios",usuarioController.listarusuarios)
    .get("/usuarios/:uid",usuarioController.listarusuarioPorId)
    .post("/usuarios",usuarioController.cadastrarusuarios)
    .put("/usuarios/:uid",usuarioController.atualizarusuarios)
    .delete("/usuarios/:uid",usuarioController.excluirusuarios)

export default router;    