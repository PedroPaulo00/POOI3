import Token from "../utis/Token";

export default interface IPayoneerPayment{
    authToken() : Token;
    sendPayment() : void;
    receivePayment() : void;
}