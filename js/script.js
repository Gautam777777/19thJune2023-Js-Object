

let car1 = {
    //1.Property:Value (Many)
    brand:"Tata",
    model:"Altroz",
    color:"white",
    price:1000000,

    //2.Functions (Many)
    getCar1FullDetail(){
        //every function return something
        return this.brand+' '+this.model+' '+this.color+' '+this.price;
    }
}

var car2 = {
    //1.Property:Value (Many)
    brand:"Mahindra",
    model:"Thar",
    color:"Black",
    price:1500000,

    //2.Functions/Methods (Many)
}

const car3 = {
    //1.Property:Value (Many)
    brand:"Hyundai",
    model:"Varna",
    color:"Wgite",
    price:800000

    //2.Functions/Methods (Many)
}


console.log(car1.getCar1FullDetail())