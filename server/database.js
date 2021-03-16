const mongoose = require('mongoose');
const URI = 'mongodb://localhost/aplicacion';

mongoose.connect(URI, //nos conectamos
    { useNewUrlParser: true, useUnifiedTopology: true}).
then(db => console.log('Base de datos conectado'))// si se conecta me enviara un mensaje
.catch(err => console.log(err));// si no me dara uno de error

module.export = mongoose;

/* Instalar mongoose

npm uninstall mongoose
npm install mongoose@5.11.15

*/ 