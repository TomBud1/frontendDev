
class Tv {
    constructor(company, model, smartTV, size, HDMI, USB) {
        this._company = company;
        this._model = model;
        this._size = size;
        this._smartTV = smartTV;
        this._HDMI = HDMI;
        this._USB = USB;
    }

    set company(value) {
        this._company = value;
    }
    set model(value) {
        this._model = value;
    }

    set size(value) {
        this._size = value;
    }
    set smartTV(value) {
        this._smartTV = value;
    }

    set HDMI(value) {
        this._HDMI = value;
    }

    set USB(value) {
        this._USB = value;
    }

    get company() {
        return this._company;
    }
    get model() {
        return this._model;
    }

    get size() {
        return this._size;
    }
    get smartTV() {
        return this._smartTV;
    }

    get HDMI() {
        return this._HDMI;
    }

    get USB() {
        return this._USB;
    }

    toString() {
        return `${this._company} ${this._model} smartTV:${this._smartTV} size:${this._size} HDMI:${this._HDMI} USB:${this._USB}\n`;
    }
}

module.exports = Tv