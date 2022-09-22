module.exports = {
    multiMongooseToObject: mongooseArrays=> mongooseArrays.map(mongoose => mongoose.toObject()),
    singleMongooseToObject: mongoose=>(mongoose ? mongoose.toObject() : mongoose)
}