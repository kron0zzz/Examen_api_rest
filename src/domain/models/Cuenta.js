class Cuenta {
    constructor({nroTiquetera, cliente, saldo, totalTransacciones}){
        this.nroTiquetera = nroTiquetera;
        this.cliente = cliente;
        this.saldo = saldo;
        this.totalTransacciones = totalTransacciones;
    }
}

export default Cuenta;