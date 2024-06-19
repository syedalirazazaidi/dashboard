console.log("hi developer");
// reverser the string
// var str = "aliraza";
// var reverse = "";
// for (let item of str) {
//   reverse = item + reverse;
// }
// var left = 0;
// var right = str.length - 1;
// while (reverse <= right) {

// }
// console.log(reverse);

// find number of occurance in inside the string
// var mystr = "mynameisalirazazaidi";
// var hashmap = {};
// for (const char of mystr) {
//   if (hashmap[char]) {
//     hashmap[char] = hashmap[char] + 1;
//   } else {
//     hashmap[char] = 1;
//   }
// }
// console.log(hashmap);

// count all the character

// var mycha = "tttthisisrazazaidi";
// var newmap = {};
// for (const char of mycha) {
//   if (newmap[char]) {
//     newmap[char] = newmap[char] + 1;
//   } else {
//     newmap[char] = 1;
//   }
// }
// console.log(newmap);

// sum of array
// var sum = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// var plus = 0;

// for (let index = 0; index < sum.length; index++) {
//   const element = sum[index];
//   plus = plus + element;
// }
// console.log(plus);

// sum of pair whose sum is zero
function sumaaryy() {
  var arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length; j++) {
        var sum = arr[index]+arr[j]
        if(sum===0){
    //   return{ value:[arr[left], arr[right]],index:[left,right]}
return [index,j]
        }
    }
    
  }
//   var left = 0;
//   var right = arr.length - 1;
//   while (left < right) {
//     var sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return{ value:[arr[left], arr[right]],index:[left,right]}
//     }
//     left++;
//     right--;
//   }
}

var newarray=sumaaryy()
console.log(newarray);
