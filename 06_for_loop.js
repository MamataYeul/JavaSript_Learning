// intialization:1 update by 1: condition<=10
for (var test = 1; test <=10; test++) {//1 2 3 4 5 6 7 8 9 10
  console.log(test);   
}
console.log("============Print Even Number from 0-10.=========================");
// 0 2 4 6 8 10
for (let index=0 ; index<=10; index=index+2) {
   console.log(index);
}console.log("=====================================");
// WAP to print numbers from 50 to 40 by decrementing by 1
for (let index = 50; index>40; index--) {
    console.log(index);
}
console.log("================Odd Numbers from 1 to 30=====================");
for (let index = 1; index < 30; index=index+2) {
    console.log(index);
    
}
console.log("================odd Numbers 1 t0 30=====================");
for (let index = 1; index < 30; index++) {
if(index%2!=0){
    console.log(index);
}
    
}
console.log("========First 43 even numbers =============================");
//WAP to find first 43 even numbers
var countEven = 0; // 2
for (let index = 0; index < 1000; index++) { // 1  2
    if(index%2==0){
        console.log(index); // 0  2 
        countEven = countEven +1;
        if (countEven==43) {
            break;
        }
    }
    
}
