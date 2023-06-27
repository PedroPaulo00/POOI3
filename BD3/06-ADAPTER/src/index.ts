import Payoneer from "./payoneer/Payoneer";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/iPayPalPayment";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import IPayoneerPayment from "./payoneer/iPayoneerPayment";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import MercadoPago from "./mercadopago/MercadoPago";

const payment : IPayPalPayment = new PayPal();
payment.paypalPayment();
payment.paypalReceive();

const payment2: IPayPalPayment = new PayoneerAdapter(new Payoneer());
payment2.paypalPayment();
payment2.paypalReceive();

const payment3: IPayoneerPayment = new MercadoPagoAdapter(new MercadoPago());
payment3.sendPayment();
payment3.receivePayment(); 

/*const payment1 : iPayPalPayment = new PayPal();
payment1.paypalPayment();
payment1.paypalReceive();

const payment2 : iPayoneerPayment = new Payoneer();
payment2.sendPayment();
payment2.receivePayment(); */