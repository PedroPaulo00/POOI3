import IPlatform from "./IPlatform";

export default class Xbox implements IPlatform{
    constructor(){
        console.log("-------------XBOX-------------");
        console.log("XBOX: Configurando console!");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("XBOX: Configurando console!");
    }
    authToken(): void {
        console.log("XBOX: Autorizando token!");
    }
}
    