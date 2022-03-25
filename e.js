/* 
function createArray(size,min=10,max=40){
    let arr=new Array(size);
    for (let i=0; i<size; i++){
        arr[i]=Math.floor(Math.random()*(max-min+1)+min);
    }
    return arr;
}

console.log(createArray(10)); */
/* 
let n1=5;
let n2=7;
console.log(`n1=${n1}, n2=${n2}`);
function swap() {
    let temp=n2;
    n2=n1;
    n1=temp;
    console.log(`n1=${n1}, n2=${n2}`);
}
swap();
console.log(`n1=${n1}, n2=${n2}`);
 */

let a1=[1,2,3];
let a2=[];
for (i=0; i<3;i++) {
    a2[i]=a1[i];
}
// hoặc a2=[...a1] thì k bị trùng địa chỉ nhớ của mảng
// gọi là "Toán tử rải" "...spread" --> chỉ dùng 1 cấp, k dùng mảng trong mảng!
// hoặc dùng let str =JSON.stringify(a1) ==> convert from Object to string
// và JSON.parse(str) ==> convert from string to Object
a2[1]=20;
console.log(a1);
console.log(a2);