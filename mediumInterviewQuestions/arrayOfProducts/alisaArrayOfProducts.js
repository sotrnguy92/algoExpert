function arrayOfProducts(array) {
  // Write your code here.
  let products = [];
  for (let i = 0; i < array.length; i++) {
    let temp = [...array];
    let product = 1;
    temp.splice(i, 1);
    for (let j = 0; j < temp.length; j++) {
      product *= temp[j]
    }
    products.push(product)
  }
  return products;
}

const array = [5, 1, 4, 2]

console.log(arrayOfProducts(array))
