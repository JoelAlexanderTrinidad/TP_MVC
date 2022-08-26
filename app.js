const express = require('express');
const path = require('path');
const app = express();
const puerto = 3030;

/* recursos estáticos */
app.use(express.static(path.resolve(__dirname,'public')));

/* motor de vistas */
app.set(path.resolve(__dirname,'views'));
app.set('view engine', 'ejs');

/* rutas */
const mainRouter = require('./routes/main');
app.use('/', mainRouter);

/* app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));
app.get('/about', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'about.html'))); */


app.listen(puerto, () =>{
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
} )