var tv1 = {
    company: 'Samsung',
    model: 'NU7102K',
    size: 55,
    connectors: {
        HDMI: 3,
        USB: 3,
        Ethernet: true
    }
};

var tv2 = {
    company: 'LG',
    model: '65UK6400',
    size: 65,
    connectors: {
        HDMI: 3,
        USB: 2,
        Ethernet: true
    }
};

var tv3 = {
    company: 'Sharp',
    model: '40UI7552E',
    size: 40,
    connectors: {
        HDMI: 3,
        USB: 3,
        Ethernet: true
    }
}

var tv4 = {
    company: 'Sharp',
    model: '55UIE',
    size: 55,
    connectors: {
        HDMI: 2,
        USB: 2,
        Ethernet: true
    }
}

var tvDb = [tv1, tv2, tv3, tv4];

function findByName(term) {
    var tvArray = [];
    for (i = 0; i < tvDb.length; i++) {
        if ((tvDb[i].company) == term) {
            tvArray.push(tvDb[i])
        }
    }
    return tvArray;
};

function findBySizeGreater(limes) {
    var tvArray = [];
    for (i = 0; i < tvDb.length; i++) {
        if ((tvDb[i].size) >= limes) {
            tvArray.push(tvDb[i])
        }
    }
    return tvArray;
};

function findBySizeLess(limes) {
    var tvArray = [];
    for (i = 0; i < tvDb.length; i++) {
        if ((tvDb[i].size) <= limes) {
            tvArray.push(tvDb[i])
        }
    }
    return tvArray;
};

console.log(tv1.marka, tv1.model, tv1.rozmiar)
console.log('-------------------------------------------')
console.log(tvDb)
console.log('-------------------------------------------')
console.log('findByName')
console.log(findByName('Sharp'))
console.log('-------------------------------------------')
console.log('findBySizeGreater(55)')
console.log(findBySizeGreater(55))
console.log('-------------------------------------------')
console.log('findBySizeLess(55)')
console.log(findBySizeLess(65))




