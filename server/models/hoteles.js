
const mongoose = require ('mongoose');
const { Schema } = require ('mongoose');

const HotelesSchema = new Schema ({
	id: { type: String, requied: true},
	name: { type: String, required: true},
	stars: { type: Number, required: true },
	price: { type: Number, required: true},
	image: { type: String, required: true },
	amenities: {type: Array, required: true}
}); 


module.exports = mongoose.model ('Hotless', HotelesSchema);