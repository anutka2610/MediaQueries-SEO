let l = 2;
let k = 7;
const arr = [];
let g = k - l + 2;
for (let i = l; i <= g; i++) {
  if (i % 2 !== 0) {
    arr.push(i);
  }
}
console.log(arr);
