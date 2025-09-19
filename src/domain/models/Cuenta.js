class Cuenta {
    constructor({nroTiquetera, cliente, saldo, totalTransacciones, observaciones}){
        this.nroTiquetera = nroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
        this.observaciones = observaciones
    }
}

export default Cuenta;