import Usuarios from '../models/Usuarios.js';

export const welcome = async () => {
    try {
        const bienvenida = "Bienvenido"
        console.log(bienvenida);
    } catch (error) {
        console.log(error);
    }
}

export const verUsuarios = async(req, res)=>{
    try {
        const usuarios = await Usuarios.find().lean()
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const verUsuarioUnico = async(req, res)=>{
    try {
        const { id } = req.params;
        const usuarioUnico = await Usuarios.findById(id).lean()
        res.status(200).json(usuarioUnico);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const crearUsuario = async (req, res)=>{
    try {
        const usuarioModel = Usuarios(req.body);
        const usuarioSave = await usuarioModel.save()
        res.status(200).json(usuarioSave);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const actualizarUsuario = async (req, res)=>{
    try {
        const { id } = req.params;
        const usuarioActu = await Usuarios.findByIdAndUpdate(id, req.body);
        res.status(200).json(usuarioActu);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const eliminarUsuario = async (req, res)=>{
    try {
        const { id } = req.params;
        const usuarioElemi = await Usuarios.findByIdAndDelete(id);
        res.status(200).json(usuarioElemi);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}