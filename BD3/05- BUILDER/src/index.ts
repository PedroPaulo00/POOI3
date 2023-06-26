import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";
import Vehicle from "./products/Vehicle";

const builder : SandwichBuilder = new SandwichBuilder();
const director : Director = new Director(builder);

director.construcXSalada();
const sedan : Vehicle = builder.getSandwich();
console.log("Tipo do sanduiche: " + xburguer.vehicleType);
console.log("Proteinas: " + sedan.engine.power);
console.log("Pão: " + sedan.transmission);
console.log("Numero de saladas: " + sedan.seats);
console.log("Numero de molhos: " + sedan.wheels.length);
console.log("----------------------------------------------------------------");

director.constructHotDog();
const truck : Sandwich = builder.getSandwich();
console.log("Criando veículo: " + truck.vehicleType);
console.log("Motor: " + truck.engine.power);
console.log("Transmissão: " + truck.transmission);
console.log("Assentos " + truck.seats);
console.log("Número de rodas: " + truck.wheels.length);

//desafio da aula: adicionar moto ou algum outro tipo