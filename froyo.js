
function orderSummary (order) {

  // create an array that takes only the unique flavor in the order

  // create an object that contains the unique flavor and set quantity to 0
   const obj = order.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value]||0)+1 ;
    return accumulator;
  }, {});
  return obj;
}

// *-------------------------* //

const customerOrder = prompt(
  "Please enter your order.",
  "banana,banana,chocolate,strawberry,chocolate"
);

var orderArray = customerOrder.split(",").map(flavor=>flavor.trim());

console.table(orderSummary(orderArray));


// An object is used to keep count of how many orders there are of each flavor. -0.5/1.0
// The program correctly counts the number of each flavor in the user's input. -0.5/1.0
// The logic for counting the frequencies of elements in an array is organized into a function that returns an object. -0.5/1.0

// v1.0 - Initial submission
// const customerOrder = prompt(
//   "Please enter your order.",
//   "banana,banana,chocolate,strawberry,chocolate"
// );

// var orderArray = customerOrder.split(",");

// var filteredArray = [...new Set(orderArray)];

// const obj = filteredArray.reduce((accumulator, value) => {
//   return { ...accumulator, [value]: 0 };
// }, {});

// for (const key in obj) {
//   for (j = 0; j < orderArray.length; j++) {
//     if (orderArray[j] === key) {
//       obj[key]++;
//     }
//   }
// }