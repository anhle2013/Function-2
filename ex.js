/* let matrix = [
    [5, 6, 7, 8],
    [8, 9, 6],
    [1, 2, 3, 4, 6, 7, 8]
];
for (let i=0;i<matrix.length;i++) {
    for (let j=0; j<matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
} */

let row=5;
let col=6;
let min=10;
let max=80;
let matrix=[];
for (let i=0; i<row; i++) {
    let arr=[];
    for (let j=0; j<col; j++) {
        arr[j]= Math.floor(Math.random() * (max-min+1)) + min; 
    }
    matrix[i]=arr;
}
console.log(matrix);