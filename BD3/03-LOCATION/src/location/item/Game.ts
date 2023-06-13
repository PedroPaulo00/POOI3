import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
       this.getDescription();
       console.log("Game: Preparando para iniciar...");
    }
    getDescription(): void {
        console.log("Game: Iniciando!")
    }
}