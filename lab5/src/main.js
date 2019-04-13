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

class Tv extends Device {
    constructor(company, model,smartTV, size, HDMI, USB) {
    super(company,model);    
    this.size = size;
    this.smartTV = smartTV;
    this.HDMI = HDMI;
    this.USB = USB;
}

set size(value){
    this._size=value;
}
set smartTV(value){
    this._smartTV=value;
}

set HDMI(value){
    this._HDMI=value;
}

set USB(value){
    this._USB=value;
}

get size(){
    return this._size;
}
get smartTV(){
    return this._smartTV;
}

get HDMI(){
        return this._HDMI;
}

get USB(){
        return this._USB;
}

    toString() {
        return this.company + " " + this.model + " smartTV:" + this.smartTV + " size: " + this.size + " HDMI:" + this.HDMI + " USB:" + this.USB + "\n";
}
}

var tvDb = {};
tvDb.module = (function () {

    var tvs = [];

    function findTvByModel(model) {
        return tvs.find(function (tv) { return tv.model === model })
    }

    function findTvByCompany(company) {
        return tvs.filter(function (tv) { return tv.company === company })
    }

    function findTvBySizeGreater(size) {
        return tvs.filter(tv => tv.size >= size);
    }

    function findTvBySizeLess(size) {
        return tvs.filter(tv => tv.size <= size);
    }

return {

    showAllModelsInDb: function () {
        tvs.forEach(tv =>
            console.log(tv.toString())
        );
    },

    showByModel: function (model) {
        console.log(findTvByModel(model).toString());
    },

    showByCompany: function (company) {
        return console.log(findTvByCompany(company).map(tv => 
        tv.toString()).join(""));
    },

    showTvBySizeGreater: function (size) {
        return console.log(findTvBySizeGreater(size).map(tv => 
            tv.toString()).join(""));
    },

    showTvBySizeLess: function (size) {
        return console.log(findTvBySizeLess(size).map(tv => 
            tv.toString()).join(""));
    },

    addTv: function (tv) {
        if (tvs.some(function (tvInDb) { return tv.model === tvInDb.model })) {
            console.log("Model is already in database!");
            return;
        }
        tvs.push(tv);
    },

    deleteTv: function (model) {
        tvs = tvs.filter(function (tv) { return tv.model !== model });
    }

};
})();
//--------------------------------------------------------------------------------
var tvDb = tvDb.module;

device1 = new Device("Sharp", "55UIE");
tv1 = new Tv(device1.company, device1.model, true, 55, 2, 2);

device2 = new Device("Samsung", "NU7102K");
tv2 = new Tv(device2.company, device2.model, true, 55, 3, 3);

device3 = new Device("Samsung", "UE60KU6072");
tv3 = new Tv(device3.company, device3.model, true, 60 , 2, 2)

tvDb.addTv(tv1);
tvDb.addTv(tv2);
tvDb.addTv(tv3);


console.log("Show All Models In DB");
tvDb.showAllModelsInDb();
console.log("Show By Company");
tvDb.showByCompany("Samsung");
console.log("Show By Model");
tvDb.showByModel("55UIE");
console.log("Show TV By Size Greater");
tvDb.showTvBySizeGreater(60);
console.log("Show TV By Size Less");
tvDb.showTvBySizeLess(60);

tvDb.deleteTv("55UIE");
console.log("Show All Models In DB");
tvDb.showAllModelsInDb();

console.log("Device and TV check");
console.log(device1.company,device1.model);
console.log("Device and TV check");
device1.company = "Sony";
console.log(device1.company,device1.model);
