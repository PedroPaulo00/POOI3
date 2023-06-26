import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./IBuilder";

export default class SandwichBuilder implements IBuilder{
    reset(): void {
        this.sandwich = new Sandwich();
    }
    getSandwich(): Sandwich{
        this.sandwich = new Sandwich();
    }
    addSauce(sauce: Sauce) {
        this.sandwich = new Sandwich();
    }
    setSandwichType(value: SandwichType) {
        this.sandwich = new Sandwich();
    }
    setSalad(salad: Salad) {
        this.sandwich = new Sandwich();
    }
    setProtein(protein: number) {
        this.sandwich = new Sandwich();
    }
    setBread(bread: Bread) {
        this.sandwich = new Sandwich();
    }
    private sandwich = new Sandwich();
}