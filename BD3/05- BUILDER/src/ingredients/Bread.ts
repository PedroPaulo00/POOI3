export default class Bread{
    constructor(private _type : string){}

    get type() : string{
        return this._type;
    }

    set type(type : string){
        this._type = type;
    }
}