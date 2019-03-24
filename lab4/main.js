function Device (company, model){
    this.company = company;
    this.model = model;
}

function Connectors(HDMI, USB, Ethernet){
    this.HDMI = HDMI;
    this.USB = USB;
    this.Ethernet = Ethernet;
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

function TV (company,model, size, HDMI, USB, Ethernet) {
    Device.call(this, company, model);
    connectors=Connectors.call(this, HDMI, USB, Ethernet)
    this.size = size;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

device1 = new Device("Sharp", "55UIE");
connectors1= new Connectors(2,2, true);
TV1 = new TV(device1.company, device1.model, 55, connectors1.HDMI, connectors1.USB, connectors1.Ethernet);

device2 = new Device("Samsung", "NU7102K");
connectors2= new Connectors(3,3, true);
TV2 = new TV(device2.company, device2.model, 55, connectors2.HDMI, connectors2.USB, connectors2.Ethernet);

console.log(TV1);
console.log(TV2);
console.log(connectors1);
console.log(connectors2);

var tvDb = (function() {
    
})
