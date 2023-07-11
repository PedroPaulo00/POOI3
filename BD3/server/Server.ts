import Middleware from "../middlewares/Middleware";

export default class Server{
    private middleware: Middleware;

    setMiddleware(middleware: Middleware) : void{
        this.middleware = middleware;
    }

    logIn(email: string, password: string) : boolean{
        if(this.middleware.check(email, password)){
            console.log("Usuário autenticado!");
            return true;
        }

        return false;
    }
}