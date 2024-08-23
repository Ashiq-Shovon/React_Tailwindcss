// const Price = function (price) {
//   this.price = price;
//   this.increasePrice = function () {
//     this.price++;
//     // console.log(this.price)
//     return this.price++;
//   }
//   return this;
// }
// const obj = new Price(10);
// console.log(obj.increasePrice()) ;
// const obj2 = new Price(333);
// obj2.increasePrice();

//declare

//expression

//anonymous function

// const sum = (function () {
//   let count = 0;
//   function changeBy(b, a) {
//     if (a === "inc") {
//       count += b;
//     }
//     if (a === "dec") {
//       count -= b;
//     }
//   }
//   return {
//     increment(b, a) {
//       changeBy(b, a);
//     },
//     decrement(b, a) {
//       changeBy(b, a);
//     },
//     value() {
//       return count;
//     },
//   };
// })();

// sum.decrement(22, "dec");
// let result = sum.value();
// console.log(result);
// sum.increment(44, "inc");
// console.log(sum.value());

// const makeFunc = (function() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// })()

// makeFunc();
// const myFunc = makeFunc();
// myFunc();

const num = [1, 2, 3, 4, 5, 6];

const even = num.filter((digit, index) => {
  if (digit % 2) {
    return digit;
  } 
});
console.log(even);
