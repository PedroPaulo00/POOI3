import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
       this.getDescription();
       console.log("Movie: Preparando para iniciar...");
    }
    getDescription(): void {
       console.log("Movie: Iniciando!");
    }
}