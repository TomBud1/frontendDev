import Tv from './Tv.js';

class TvDb {

    constructor() {

        this._tvs = [];

        this.addTv(new Tv("Sharp", "55UIE", true, 55, 2, 2));

        this.addTv(new Tv("Samsung", "NU7102K", true, 55, 3, 3));

        this.addTv(new Tv("Samsung", "UE60KU6072", true, 60, 2, 2));
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
        if (this._tvs.some(tvInDb => tv.model === tvInDb.model )) {
            console.log("Model is already in database!");
            return;
        }
        this._tvs.push(tv);
    }

    deleteTv(model) {
        this._tvs = this._tvs.filter(tv => tv.model !== model );
    }

}

export default TvDb;    