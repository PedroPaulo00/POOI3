import IPlatform from "../platforms/IPlatform";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    constructor(platform: IPlatform){
        super(platform);
    }

    challenge() : void{
        console.log("Rebata 5 bolas four-seam fastball!");
    }
}