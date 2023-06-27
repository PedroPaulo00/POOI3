import Token from "../utis/Token";
import IPayPalPayment from "./iPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token: Token;

    authToken() {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via Paypal.");
    }
    paypalReceive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebendo pagamento via Paypal.");
    }
}