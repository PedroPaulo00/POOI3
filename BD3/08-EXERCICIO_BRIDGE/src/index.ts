import Playstation from "./platforms/Playstation";
import Play from "./game/Play";
import IPlatform from "./platforms/IPlatform";
import AdvancedPlay from "./game/AdvancedPlay";
import Xbox from "./platforms/Xbox";

function startPlay(platform: IPlatform){
    const play = new Play(platform);
    play.playing();
    play.result();
}

function startAdvancedPlay(platform: IPlatform){
    console.log("Aguarde...");
    const play = new AdvancedPlay(platform);
    play.playing();
    play.result();
    play.challenge();
}

startAdvancedPlay(new Xbox());
startAdvancedPlay(new Playstation());
