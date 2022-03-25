let str='jsiqdiqcqpuljascjabdiWdbqwmalzwe';
let arr= str.split('');
console.log(arr.length);
let x= 'a';

let count=0;
for (let i=0; i< arr.length; i++) {
    console.log(i);
    if (arr[i]==x) {count++;}
}
console.log(count);