import Token from "../utis/Token";

export default interface IPayPalPayment{
    authToken() : Token;
    paypalPayment(): void;
    paypalReceive(): void;
}