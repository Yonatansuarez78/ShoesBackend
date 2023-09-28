import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        }
    },
    //  { 
    //     versionKey: false 
    // }, 
    {
         timestamps: true
     }
)

export default model("Usuarios", usuariosSchema);