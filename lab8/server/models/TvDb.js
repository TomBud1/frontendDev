const Tv = require('./Tv.js');

class TvDb {

    constructor() {

        this._tvs = [];

        this.addTv(new Tv("Sharp", "55UIE", true, 55, 2, 2));

        this.addTv(new Tv("Samsung", "NU7102K", true, 55, 3, 3));

        this.addTv(new Tv("Samsung", "UE60KU6072", true, 60, 2, 2));

        this.addTv(new Tv("LG", "50UK6750", true, 50, 4, 2 ));

        this.addTv(new Tv("Philips", "55PUS7303/12", true, 55, 4, 2 ));
    }

    findTvByModel(model) {
        return this._tvs.find(function (tv) { return tv.model === model })
    }

    findTvByCompany(company) {
        return this._tvs.filter(function (tv) { return tv.company === company })
    }

    findTvBySizeGreater(size) {
        return this._tvs.filter(tv => tv.size >= size);
    }

    findTvBySizeLess(size) {
        return this._tvs.filter(tv => tv.size <= size);
    }

    AllModelsInDb() {
        return this._tvs;
    }

    addTv(tv) {
        if (this._tvs.some(tvInDb => tvInDb._model === tv._model )) {
            console.log(tv);
            console.log("Model is already in database!");
            return;
        }
        this._tvs.push(tv);
    }

    deleteTv(model) {
        this._tvs = this._tvs.filter(tv => tv._model !== _model );
    }

    updateTv(model) {
    const tv = this._tvs.find(tv => tv._model === _model)
    tv.updateTv(body);
    }

}

module.exports = TvDb;    