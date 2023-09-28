import { Router } from 'express';
import { welcome, verUsuarios, verUsuarioUnico, login, crearUsuario, logout, profile, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';
import {authRequired} from "../middlewares/validateToken.js"

const router = Router();

router.get("/", welcome);
router.get("/usuarios", verUsuarios);
router.get("/usuarios/:id", verUsuarioUnico);

router.post("/register", crearUsuario);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);


export default router;