export const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export function file() {
  this.cities = ["rajshahi", "norail", "nator"];

  //creating an array
  this.shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

  this.pushElement = (city) => {
    this.cities.push(city);
  };
  this.popElement = () => {
    this.cities.pop();
  };
  // this.shiftElement = () => {
  //   this.cities.shift();
  // };

  //counting the length of array
  this.legthCount = () => {
    return this.shopping.length;
  };
  //access array counting  array
  this.accessArray = () => {
    return this.shopping[0];
  };
  this.getValue = () => {
    return this.cities;
  };
}
export const arrayObj = new file();

// export const hon = (function () {
//   let cities = ["rajshahi", "norail", "nator"];
//   const pushElement = (city) => {
//     cities.push(city);
//     cities.push(city);
//     cities.push(city);
//     cities.push(city);
//     return cities;
//   };
//   const popElement = () => {
//     cities.pop();
//     cities.pop();
//     cities.pop();
//     return cities;
//   };
//   return {
//     pushElement,
//     popElement,
//   };
// })();
