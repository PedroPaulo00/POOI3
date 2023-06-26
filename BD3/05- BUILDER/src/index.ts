import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";

const builder : SandwichBuilder = new SandwichBuilder();
const director : Director = new Director(builder);

director.construcXSalada();
const xburguer : Sandwich = builder.getSandwich();
console.log("Tipo do sanduiche: " + xburguer.sandwichType);
console.log("Numero de proteinas (carnes): " + xburguer.protein);
console.log("Pão: " + xburguer.bread);
console.log("Numero de saladas: " + xburguer.salad);
console.log("Molhos: " + xburguer.sauce);
console.log("----------------------------------------------------------------");

director.constructHotDog();
const hotdog : Sandwich = builder.getSandwich();
console.log("Tipo do sanduiche: " + hotdog.sandwichType);
console.log("Numero de proteinas (carnes): " + hotdog.protein);
console.log("Pão: " + hotdog.bread);
console.log("Numero de saladas: " + hotdog.salad);
console.log("Molhos: " + hotdog.sauce);
console.log("----------------------------------------------------------------");