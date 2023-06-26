export default class Sauce{

    constructor(private _flavor: string){}

    get flavor() : string{
        return this._flavor;
    }

    set flavor(flavor: string){
        this._flavor = flavor;
    }
}