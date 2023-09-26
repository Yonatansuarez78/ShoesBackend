import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema(
    {
        nombre: {
            type: String
        },
        apellido: {
            type: String
        },
        telefono: {
            type: Number
        }
    },
    {
        versionKey: false
    }
)

export default model("Usuarios", usuariosSchema);