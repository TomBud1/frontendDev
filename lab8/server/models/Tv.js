
class Tv {
    constructor(company, model, smartTV, size, HDMI, USB) {
        this._company = company;
        this._model = model;
        this._size = size;
        this._smartTV = smartTV;
        this._HDMI = HDMI;
        this._USB = USB;
    }

    // updateTv(body){
    //     const {company, model, size, smartTV, HDMI, USB} = body;
    //     this._company = company;
    //     this._model = model;
    //     this._size = size;
    //     this._smartTV = smartTV;
    //     this._HDMI = HDMI;
    //     this._USB = USB;
    // }
   
    toString() {
        return `${this._company} ${this._model} smartTV:${this._smartTV} size:${this._size} HDMI:${this._HDMI} USB:${this._USB}\n`;
    }
}

module.exports = Tv;