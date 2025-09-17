export default class GetCuentas {
    constructor(cuentaRepository) {
      this.cuentaRepository = cuentaRepository;
    }
  
    async execute() {
      return await this.cuentaRepository.findAll();
    }
}