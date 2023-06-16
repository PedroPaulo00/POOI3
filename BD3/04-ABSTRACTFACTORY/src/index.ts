import Client from "./clients/Client";
import NineNineFactory from "./factories/NineNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interface/ITransportFactory";
import Company from "./vehicles/conts/Company";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;
switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NineNineFactory();
        break;
    default: 
        console.log("Companhia não Definida!");
}

const client = new Client(factory);
client.startRoute();