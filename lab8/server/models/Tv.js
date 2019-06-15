class BaseModel {
    constructor(id) {
        this.id = id;
    }
}


class Tv extends BaseModel {
    constructor(id, company, model, smartTV, size, HDMI, USB) {
        super(id);
        this.company = company;
        this.model = model;
        this.size = size;
        this.smartTV = smartTV;
        this.HDMI = HDMI;
        this.USB = USB;
    }

    updateTv(body) {
        const { company, model, size, smartTV, HDMI, USB } = body;
        this.company = company;
        this.model = model;
        this.size = size;
        this.smartTV = smartTV;
        this.HDMI = HDMI;
        this.USB = USB;
    }

    toString() {
        return `${this.company} ${this.model} smartTV:${this.smartTV} size:${this.size} HDMI:${this.HDMI} USB:${this.USB}\n`;
    }
}

module.exports = Tv;