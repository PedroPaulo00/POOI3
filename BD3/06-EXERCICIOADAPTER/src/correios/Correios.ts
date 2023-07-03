import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("-------------------------------");
        console.log("À enviar pedido via correios...");
    }
    receiveCorreios(): void {
        console.log("À receber pedido via correios...");
    }
}