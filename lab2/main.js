var telewizor1 = {
    marka: 'Samsung',
    model: 'NU7102K',
    rozmiar: 55,
    zlacza: {
        HDMI: 3,
        USB: 3,
        Ethernet: true
    }
};

var telewizor2 = {
    marka: 'LG',
    model: '65UK6400',
    rozmiar: 65,
    zlacza: {
        HDMI: 3,
        USB: 2,
        Ethernet: true
    }
};

var telewizor3 = {
    marka: 'Sharp',
    model: '40UI7552E',
    rozmiar: '40',
    zlacza: {
        HDMI: 3,
        USB: 3,
        Ethernet: true
    }
}

var telewizor4 = {
    marka: 'Sharp',
    model: '55UIE',
    rozmiar: '55',
    zlacza: {
        HDMI: 2,
        USB: 2,
        Ethernet: true
    }
}

var telewizory = [telewizor1, telewizor2, telewizor3, telewizor4];
var limes = 55;

function findByName(telewizory,term) {
    var telewizoryArray = [];
    for (i = 0; i < telewizory.length; i++) {
        if ((telewizory[i].marka) == term) {
            telewizoryArray.push(telewizory[i])
        }
    }
    return telewizoryArray;
};

function findBySizeGreater(telewizory,limes) {
    var telewizoryArray = [];
    for (i = 0; i < telewizory.length; i++) {
        if ((telewizory[i].rozmiar) >= limes) {
            telewizoryArray.push(telewizory[i])
        }
    }
    return telewizoryArray;
};

function findBySizeLess(telewizory,limes) {
    var telewizoryArray = [];
    for (i = 0; i < telewizory.length; i++) {
        if ((telewizory[i].rozmiar) <= limes) {
            telewizoryArray.push(telewizory[i])
        }
    }
    return telewizoryArray;
};

console.log(telewizor1.marka, telewizor1.model, telewizor1.rozmiar)

console.log(telewizory)

console.log(findByName(telewizory, 'Sharp'))

console.log(findBySizeGreater(telewizory, 55))

console.log(findBySizeLess(telewizory, 65))


function less(value) {
    return value <= limes;
}

function greater(value) {
    return value >= limes;
}




