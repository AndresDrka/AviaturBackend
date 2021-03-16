//Las constantes se pueden utilizar en cualquier lado del archivo
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//Asigna el puerto, process.env.PORT => Asigna por defecto el puerto del sistema 
// ||  => Significa que puede escoger un puerto manual en este ejemplo 3000 o el asignado por el sistema
app.set('port', process.env.PORT || 3000); 


//Morgan puede ver las peticiones del servidor, cada vez quel usuario ingresa una ruta
app.use(morgan('dev'));
//Todo los datos que llegen del frontend que por defecto los envia por json este le ayuda interpretar 
//JSon casi igual que un array
app.use(express.json());
app.use(cors());

//rutas
app.use('/api/hoteles',require('./routes/hoteles.routes.js'));




//Esta la conexion del localhost 
//app.get('port') Trae la "Variable" que se asigno en la parte de arriba 
app.listen(app.get('port'), () => {
	console.log('El puerto del servidor es: ' + app.get('port'));
});