import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";
import ITransportadora from "./transportadora/ITransportadora";
import Transportadora from "./transportadora/Transportadora";
import transportadora from "./transportadora/Transportadora";

const transporte : ICorreios = new Correios();
transporte.sendCorreios();
transporte.receiveCorreios();

const transporte2 : ITransportadora = new transportadora();
transporte2.send();
transporte2.receive();

const transporte3 : ICorreios = new TransportadoraAdapter(new Transportadora());
transporte3.sendCorreios();
transporte3.receiveCorreios();
