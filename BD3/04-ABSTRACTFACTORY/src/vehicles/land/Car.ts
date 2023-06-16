import ILandVehicles from "./interface/ILandVehicles";

export default class Car implements ILandVehicles{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }
}