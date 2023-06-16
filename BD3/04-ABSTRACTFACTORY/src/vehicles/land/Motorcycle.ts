import ILandVehicles from "./interface/ILandVehicles";

export default class Motorcycle implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Moto: Encomenda retirada!");
    }
}