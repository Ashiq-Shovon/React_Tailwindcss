export const morePowerfull = (...param) => {
  const arr2 = [1, 2, 3, ...param, 10];

  return arr2;
};

export const overrideProperty = () => {
  const personobj = {
    age: 29,
    school: "adamjee",
  };
  const person = {
    ...personobj,
    name: "habib",
    age: 18,
    school: "bp",
  };
  return person;
};

export const addingConditionalProperty = () => {
  const isSummer = true;
  const fruits = {
    apple: 10,
    banana: 5,
    ...(isSummer ? { waterMelon: 30 } : {}),
  };
  return fruits;
};

export const copyAndMergeObject = () => {
  const obj = { name: "anik", age: 58 };
  const obj2 = { name1: "sakib", age2: 77 };

  const mergeObj = { ...obj, ...obj2 };

  return mergeObj;
};

export const copyArray = () => {
  const arr = [1, 2, 3];
  const arr2 = [...arr];

  arr2.push(4);
  // console.log(arr2);
  return arr2;
};

export const concatenateArray = () => {
  let arr = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];
  arr = [...arr, ...arr2];
  return arr;
};

export const coditionalValueAddedInArray = () => {
  const isSummer = true;
  const fruits = ["banana", "mango", ...(isSummer ? ["waterMelon"] : [])];
  return fruits;
};
