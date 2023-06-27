import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/iPayPalPayment";
import Token from "../utis/Token";

export default class PayoneerAdapter implements IPayPalPayment{
    private token : Token;
    
    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no Paypal.")
    }
    authToken(): Token {
        return new Token;
    }
    paypalPayment(): void {
        return this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        return this.payoneer.receivePayment();
    }
}