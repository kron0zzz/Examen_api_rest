import express from "express";
import cuentaRoutes from "../infrastucture/routes/cuentaRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/", cuentaRoutes);

export default app;