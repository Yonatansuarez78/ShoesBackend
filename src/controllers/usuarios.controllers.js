import Usuarios from '../models/Usuarios.js';
import bcryptjs from 'bcryptjs'
import { createAcessToken } from '../libs/jwt.js'

export const welcome = async () => {
    try {
        const bienvenida = "Bienvenido"
        console.log(bienvenida);
    } catch (error) {
        console.log(error);
    }
}

export const verUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.find().lean()
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const verUsuarioUnico = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioUnico = await Usuarios.findById(id).lean()
        res.status(200).json(usuarioUnico);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await Usuarios.findOne({ email })
        if (!userFound) res.status(400).json({ message: "Usuario invalido" })

        const isMatch = await bcryptjs.compare(password, userFound.password)
        if (!isMatch) res.status(400).json({ message: "Contraseña invalida" })

        const token = await createAcessToken({ id: userFound._id })

        res.cookie('token', token)
        res.json({
            id: userFound._id,
            nombre: userFound.nombre,
            email: userFound.email,
            icreatedAtd: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export const crearUsuario = async (req, res) => {
    const { nombre, email, password } = req.body
    try {
        const passwordHash = await bcryptjs.hash(password, 10)
        const newUser = new Usuarios({
            nombre, email, password: passwordHash,
        });
        const userSaved = await newUser.save()
        const token = await createAcessToken({ id: userSaved._id })

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            nombre: userSaved.nombre,
            email: userSaved.email,
            icreatedAtd: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const logout = (req, res) => {
    res.cookie("token", " ", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await Usuarios.findById(req.user.id)
    if (!userFound) res.status(400).json({ message: "usuario no encontrado" })
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    res.send("profile")
}

export const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioActu = await Usuarios.findByIdAndUpdate(id, req.body);
        res.status(200).json(usuarioActu);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioElemi = await Usuarios.findByIdAndDelete(id);
        res.status(200).json(usuarioElemi);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}