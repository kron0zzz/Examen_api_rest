import CreateCuenta from "../../application/use-cases/cuentas/CreateCuenta.js";
import GetCuentaById from "../../application/use-cases/cuentas/GetCuentaById.js";
import GetCuentas from "../../application/use-cases/cuentas/GetCuentas.js";
import UpdateCuenta from "../../application/use-cases/cuentas/UpdateCuenta.js"
import DeleteCuenta from "../../application/use-cases/cuentas/DeleteCuenta.js"

import CuentaRepositoryMongo from "../repositories/CuentaRepositoryMongo.js";

const cuentaRepository = new CuentaRepositoryMongo();




export const createCuenta = async (req, res) => {
  try {
    const createCuenta = new CreateCuenta(cuentaRepository);
    const cuenta = await createCuenta.execute(req.body);
    res.status(201).json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const getCuentas = async (req, res) => {
  try {
    const getCuentas = new GetCuentas(cuentaRepository);
    const cuentas = await getCuentas.execute();
    res.status(200).json(cuentas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const getCuentaById = async (req, res) => {
  try {
    const getCuentaById = new GetCuentaById(cuentaRepository);
    const cuenta = await getCuentaById.execute(req.params.id);
    res.status(200).json(cuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const updateCuenta = async (req, res) => {
    try {
        const updateCuenta = new UpdateCuenta(cuentaRepository);
        const updatedCuenta = await updateCuenta.execute(req.params.id, req.body);

        if (!updatedCuenta) {
          console.log("no pai, no encontré el id")
            // Si el resultado es null, significa que el ID no se encontró
          return res.status(404).json({ error: "Cuenta no encontrada" });
            
        }

        // Si se actualizó correctamente, respondemos con el objeto actualizado
        res.status(200).json(updatedCuenta);
    } catch (err) {
        // Si da error, mensaje 500
        res.status(500).json({ error: err.message });
    }
};






export const deleteCuenta = async (req, res) => {
    try {


        const deleteCuenta = new DeleteCuenta(cuentaRepository);
        const deleted = await deleteCuenta.execute(req.params.id);

        if (!deleted) {
          console.log("no se pudo eliminar")
            // Si la compra no se encontró, responde con 404
          return res.status(404).json({ message: "Cuenta no encontrada o ya eliminada" });
        }
        
        // Si la eliminación fue exitosa, responde con 204 No Content
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};