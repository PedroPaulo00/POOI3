import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckWeakPassword extends Middleware{
    public check(email: any, password: any): boolean{
        
    const verificarSenhaFraca = (Database.filter(item => item.password === password));
        if(!verificarSenhaFraca.length < 6){
            console.log("Senha muito fraca.");
            return false;
        }
        
    return this.checkNext(email, password);
    }


    //SE A SENHA FOR MENOR QUE 6 DA ERRO
}