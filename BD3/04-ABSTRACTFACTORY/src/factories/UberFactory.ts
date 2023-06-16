import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicles from "../vehicles/land/interface/ILandVehicles";
import ITransportFactory from "./interface/ITransportFactory";

export default class UberFactory implements ITransportFactory{
    createTransportVehicle(/*xxxxxxxxxxxxxx*/): ILandVehicles {
        console.log("Transporte via UBER");
        return new Car;
    }
    createTransportAircraft(): IAircraft {
        console.log("Transporte via 99");
        return new Airplane;        
    }
}