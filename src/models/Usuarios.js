import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema(
    {
        nombre: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: Number
        }
    },
    {
        versionKey: false
    }
)

export default model("Usuarios", usuariosSchema);