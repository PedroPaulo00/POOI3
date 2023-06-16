import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicles from "../vehicles/land/interface/ILandVehicles";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNineFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Motorcycle(); 
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
}