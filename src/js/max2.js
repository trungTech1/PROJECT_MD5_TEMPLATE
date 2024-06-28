
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Array[0];
let max2 = Array[1];
for (let i = 1; i < Array.length; i++) {
  if (Array[i] > max) {
    max2 = max;
    max = Array[i];
  } else if (Array[i] > max2) {
    max2 = Array[i];
  }
}
console.log(max2);
