class Device {
    constructor(company, model)
    {
    this._company = company;
    this._model = model;
    }

    set company(value){
        this._company=value;
    }
    set model(value){
        this._model=value;
    }
    get model(){
        return this._model;
    }
    get company(){
        return this._company;
    }
}