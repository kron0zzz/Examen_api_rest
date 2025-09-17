import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://kron0zzz:Mrmandingas@cluster0.rqfir2b.mongodb.net/examen_api?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,       // Nuevo parser de URL de MongoDB
        useUnifiedTopology: true     // Nuevo motor de monitoreo de servidores
      });
      console.log(" Conectado a MongoDB");
    } catch (err) {
      console.error(" Error de conexión:", err);
      console.log("puerto: ",process.env.PORT)
      process.exit(1); // Finaliza la ejecución si falla la conexión
      
    }
  };
  
  export default connectDB; // Exporta la función para reutilizarla en otros archivos
