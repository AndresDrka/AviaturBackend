
const express = require("express");
const router = express.Router();

const hotel =  require('../controllers/hoteles.controller');

router.get('/',hotel.getHoteles);//obtener Holetes get obtener datos
router.post('/',hotel.createHotel);//crear Hotel post guardar datos
router.get('/:id',hotel.getHotel);// obtener hotel
router.put('/:id',hotel.editHotel);// editar hotel put actualizar datos
router.delete('/:id',hotel.deleteHotel);//Eliminar hotel

router.post('/filtrar',hotel.filtrar);
module.exports = router; 