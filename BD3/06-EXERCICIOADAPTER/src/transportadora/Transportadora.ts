import ITransportadora from "./ITransportadora";

export default class transportadora implements ITransportadora{
    send(): void {
        console.log("---------------------------------------------");
        console.log("À enviar pedido via transportadora privada...");
    }
    receive(): void {
        console.log("À receber pedido via transportadora privada...");
    }
}