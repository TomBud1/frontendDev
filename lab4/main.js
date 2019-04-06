function Device(company, model) {
    this.company = company;
    this.model = model;
}

Device.prototype = {
    getCompany: function () {
        return this.company;
    },
    getModel: function () {
        return this.company;
    }
}

Device.prototype.getModel = function () {
    return this.model;
}

Device.prototype.message = function () {
    console.log("Hello from device");
}

function Tv(company, model, smartTV, size, HDMI, USB) {
    Device.call(this, company, model);
    this.size = size;
    this.smartTV = smartTV;
    this.HDMI = HDMI;
    this.USB = USB;
}

Tv.prototype = {
    toString: function () {
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
        return tvs.filter(function (tv) { return tv.size >= size; });
    }

    function findTvBySizeLess(size) {
        return tvs.filter(function (tv) { return tv.size <= size; });
    }

return {

    showAllModelsInDb: function () {
        tvs.forEach(function (tv) {
            console.log(tv.toString());
        });
    },

    showByModel: function (model) {
        console.log(findTvByModel(model).toString());
    },

    showByCompany: function (company) {
        return console.log(findTvByCompany(company).map(function (tv) {
            return tv.toString();
        }).join(""));
    },

    showTvBySizeGreater: function (size) {
        return console.log(findTvBySizeGreater(size).map(function (tv) {
            return tv.toString();
        }).join(""));
    },

    showTvBySizeLess: function (size) {
        return console.log(findTvBySizeLess(size).map(function (tv) {
            return tv.toString();
        }).join(""));
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