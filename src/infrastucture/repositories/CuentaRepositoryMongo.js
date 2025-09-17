import mongoose from "mongoose";

const CuentaSchema = new mongoose.Schema({
    nroTiquetera: String,
    cliente: String,
    saldo: Number,
    totalTransacciones: Number 
    
  });

const CuentaModel = mongoose.model("Cuenta", CuentaSchema);

class CuentaRepositoryMongo {

    async create(cuentaData) {
      const cuenta = new CuentaModel(cuentaData);
      return await cuenta.save();
    }

    async findAll(){
      return await CuentaModel.find();
    }

    async findById(id){
      return await CuentaModel.findById(id);
    }

    async update(id, cuentaData) {
      return await CuentaModel.findByIdAndUpdate(id, cuentaData, { new: true });
    }

    async delete(id) {
    return await CuentaModel.findByIdAndDelete(id);
  }
}


export default CuentaRepositoryMongo;
