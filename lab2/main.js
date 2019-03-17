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
    tvDb.forEach (function(tvDb) {
        if ((tvDb.company) == term) {
            tvArray.push(tvDb)
        }
    });
    return tvArray;
};

function findBySizeGreater(limes) {
    var tvArray = [];
    tvDb.forEach (function(tvDb) {
        if ((tvDb.size) >= limes) {
            tvArray.push(tvDb)
        }
    });
    return tvArray;
};

function findBySizeLess(limes) {
    var tvArray = [];
    tvDb.forEach (function(tvDb) {
        if ((tvDb.size) <= limes) {
            tvArray.push(tvDb)
        }
    });
    return tvArray;
};

console.log(tv1.company, tv1.model, tv1.size)
console.log('-------------------------------------------')
console.log(tvDb)
console.log('-------------------------------------------')
console.log('findByName')
console.log(findByName('Sharp'))
console.log('-------------------------------------------')
console.log('findBySizeGreater(55)')
console.log(findBySizeGreater(55))
console.log('-------------------------------------------')
console.log('findBySizeLess(65)')
console.log(findBySizeLess(65))
console.log('-------------------------------------------')

