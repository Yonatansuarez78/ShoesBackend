import { Router } from 'express';
import { welcome, verUsuarios, verUsuarioUnico, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

router.get("/", welcome);
router.get("/usuarios", verUsuarios);
router.get("/usuarios/:id", verUsuarioUnico);
router.post("/usuarios", crearUsuario);
router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;