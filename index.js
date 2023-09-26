import app from './src/app.js';
import './src/db.js'
import { PORT } from './src/config.js';

app.listen(PORT, ()=>{
    console.log(`servidor en puerto ${PORT}`)
})
