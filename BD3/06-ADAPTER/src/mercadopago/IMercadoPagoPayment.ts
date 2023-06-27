import Token from "../utis/Token";

export default interface IMercadoPagoPayment{
    authToken() : Token;
    enviarPagamento() : void;
    receberPagamento() : void;
}