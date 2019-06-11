const Tv = require('./Tv.js');

class TvDb {

    constructor() {

        this.tvs = [];

        this.addTv("Sharp", "55UIE", true, 55, 2, 2);

        this.addTv("Samsung", "NU7102K", true, 55, 3, 3);

        this.addTv("Samsung", "UE60KU6072", true, 60, 2, 2);

        this.addTv("LG", "50UK6750", true, 50, 4, 2);

        this.addTv("Philips", "55PUS7303/12", true, 55, 4, 2);
    }

    findTvByModel(model) {
        return this.tvs.find(function (tv) { return tv.model === model })
    }

    findTvByCompany(company) {
        return this.tvs.filter(function (tv) { return tv.company === company })
    }

    findTvBySizeGreater(size) {
        return this.tvs.filter(tv => tv.size >= size);
    }

    findTvBySizeLess(size) {
        return this.tvs.filter(tv => tv.size <= size);
    }

    AllModelsInDb() {
        return this.tvs;
    }

    addTv(company, model, smartTV, size, HDMI, USB) {
        // if (this.tvs.some(tvInDb => tvInDb._model === tv._model)) {
        //     console.log(tv);
        //     console.log("Model is already in database!");
        //     return;
        // }
        let id = this.tvs.length + 1;
        do {
            id = id++;
        } while (this.tvs.some(tv => tv.id === id));
        const tv = new Tv(id, company, model, smartTV, size, HDMI, USB);
        this.tvs.push(tv);
    }

    deleteTv(model) {
        this.tvs = this.tvs.filter(tv => tv.model !== model);
    }

    updateTv(body, id) {
        const tv = this.tvs.find(tv => tv.id === id);
        tv.updateTv(body);
    }

}

module.exports = TvDb;    