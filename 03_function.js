function sachin(money){
    
    console.log("Please go in market with Rs.:",money);
    console.log("Buy some vegetables");
    return "vegetables bag";
}
var veg=sachin(500);
console.log(veg);

function functionName(city,street,age,is_married){
//city
//street
//age
//is_married
return true,"Roja";

}
var value= functionName("Amravati","Rahatgaon",22)
console.log(value);

function swap_values(arg1,arg2){
    console.log("-------Before swap--------");
    console.log(arg1,arg2);
    console.log("====After swap===");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
swap_values("virat","Anushka");
swap_values("Mango","Apple");
swap_values(100,300);

console.log("---Addition of number-------")
function addition(arg1,arg2,arg3){
    var arg1=10;
    var arg2=10;
    var arg3=20;
    console.log(arg1+arg2+arg3);
}
addition();
console.log("======;")
function test(arg1, arg2) {
    console.log(arg1, arg2);
    return "Sachin";
}
var val = test(23, 45, 60);
console.log(val)
