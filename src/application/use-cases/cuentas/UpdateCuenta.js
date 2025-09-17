export default class UpdateCuenta {
    constructor(cuentaRepository) {
        this.cuentaRepository = cuentaRepository;
    }

    async execute(id, updatedData) {
        // Llama directamente al método 'update' del repositorio.
        const updatedCuenta = await this.cuentaRepository.update(id, updatedData);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!updatedCuenta) {
            console.warn(`No se encontró ninguna cuenta con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return updatedCuenta;
    }
}