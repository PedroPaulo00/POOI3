import IConsole from "../platforms/IPlatform";
import IGame from "./IGame";


export default class Play implements IGame{
    
    constructor(_private : IConsole){}

    playing(): void {
        console.log("Iniciando o jogo...");
    }
    result(): void {
        console.log("~~~~~~~~~~CARREGANDO~~~~~~~~~~");
    }
}