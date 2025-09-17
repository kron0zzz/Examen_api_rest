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
      const {nroTiquetera, cliente, saldo, totalTransacciones}=cuentaData


      function suma (total) { parseInt(total+1)} ;
      const totalSuma = suma(totalTransacciones)
      console.log(totalSuma)                                 


      return await CuentaModel.findByIdAndUpdate(id,({nroTiquetera, cliente, saldo, totalTransacciones}), { new: true });   // para que la api funcione normalmente (sin intentos  de autoincrementar) cambie en esta linea "totalSuma" por "totalTransacciones"
    }

    async delete(id) {
    return await CuentaModel.findByIdAndDelete(id);
  }
}


export default CuentaRepositoryMongo;
