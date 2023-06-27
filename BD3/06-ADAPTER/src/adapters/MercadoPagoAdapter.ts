import MercadoPago from "../mercadopago/MercadoPago";
import Payoneer from "../payoneer/Payoneer";
import IPayoneerPayment from "../payoneer/iPayoneerPayment";
import Token from "../utis/Token";

export default class MercadoPagoAdapter implements IPayoneerPayment{
    private token : Token;

    constructor(private mercadopago : MercadoPago){
        console.log("Adaptando Mercado Pago no Payoneer.")
    }
    authToken(): Token {
        return new Token
    }
    sendPayment(): void {
        return this.mercadopago.enviarPagamento();
    }
    receivePayment(): void {
        return this.mercadopago.receberPagamento();
    }
}
