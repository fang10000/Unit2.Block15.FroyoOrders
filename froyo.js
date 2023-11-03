
const customerOrder = prompt(
  "Please enter your order.",
  "banana,banana,chocolate,strawberry,chocolate"
);

var orderArray = customerOrder.split(",");

var filteredArray = [...new Set(orderArray)];

const obj = filteredArray.reduce((accumulator, value) => {
  return { ...accumulator, [value]: 0 };
}, {});

for (const key in obj) {
  for (j = 0; j < orderArray.length; j++) {
    if (orderArray[j] === key) {
      obj[key]++;
    }
  }
}

console.table(obj);
 

