import IPlatform from "./IPlatform";

export default class Playstation implements IPlatform{
    constructor(){
        console.log("-------------PLAYSTATION-------------");
        console.log("PLAYSTATION: Configurando console!");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("PLAYSTATION: Configurando console!");
    }
    authToken(): void {
        console.log("PLAYSTATION: Autorizando token!");
    }
}