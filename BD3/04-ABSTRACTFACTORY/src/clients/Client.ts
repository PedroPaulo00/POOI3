import ITransportFactory from "../factories/interface/ITransportFactory";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ILandVehicles from "../vehicles/land/interface/ILandVehicles";

export default class Client{
    private vehicles: ILandVehicles;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicles = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }
    startRoute(){
        this.vehicles.startRoute();
        this.aircraft.startRoute();
    }
    
}