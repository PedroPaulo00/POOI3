import IAircraft from "../../vehicles/aerial/interface/IAircraft";
import ILandVehicles from "../../vehicles/land/interface/ILandVehicles";

export default interface ITransportFactory{
    createTransportVehicle() : ILandVehicles;
    createTransportAircraft() : IAircraft;
}