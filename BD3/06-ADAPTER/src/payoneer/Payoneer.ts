import Token from "../utis/Token";
import IPayoneerPayment from "./iPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via Payoneer.");
    }
    receivePayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebendo pagamento via Payoneer.");
    }
}