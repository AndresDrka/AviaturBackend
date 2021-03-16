const hoteles = require ('../models/hoteles');
const hotelCtrl = {};

hotelCtrl.getHoteles = async (req, res) => {
   const encontrados = await hoteles.find();
   res.json(encontrados);
};

hotelCtrl.createHotel = async (req, res) =>{
  const creados =  new hoteles ({
    id: req.body.id,
	name: req.body.name,
	stars: req.body.stars,
	price: req.body.price,
	image: req.body.image,
	amenities: req.body.amenities,
  });
  await creados.save();
  res.json('Ya creado');
};

hotelCtrl.getHotel = async (req, res) =>{
    const { id } = req.params;
    const hot = await hoteles.findById(id);
    res.json(hot);
};


hotelCtrl.editHotel = async (req, res) =>{
    const { id } = req.params;
    const hotel ={
      id: req.body.id,
  name: req.body.name,
  stars: req.body.stars,
  price: req.body.price,
  image: req.body.image,
  amenities: req.body.amenities,
};
  await hoteles.findByIdAndUpdate(id, {$set: hotel}, {new: true});//es para informar que datos quiero actulizar
    res.json({ status: "Hoteles Actulizados" });
  };


hotelCtrl.deleteHotel = async (req, res) =>{
        await hoteles.findByIdAndRemove(req.params.id);
        res.json({ status: "Hoteles Eliminados" });
      };

hotelCtrl.filtrar=(req,res)=>{
    const HotelName = req.body.name;
    hoteles.find({name:HotelName},(err,data)=>{
        
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })
}



module.exports = hotelCtrl;