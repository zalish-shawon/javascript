const numbers = [12,34,54,68, 99];
//  for of loop using in array 
for(const num of numbers) {
    // console.log(num);
}

const products = [
    {id:1, name: 'Walton', price: 19000},
    {id:2, name: 'iphone', price: 109000},
    {id:3, name: 'mac book air', price: 19000},
    {id:4, name: 'lenevo laptop', price: 19000},
    {id:5, name: 'Dell laptop', price: 19000},
    {id:6, name: 'Samsung phone', price: 19000},
    {id:7, name: 'Nokia', price: 19000},
    {id:8, name: 'LG gram laptop', price: 19000},
]

// for (const product of products) {
//     console.log(product);
// }


function matchedProducts (products, search) {
    const matched = [];
    for(const product of products) {
        // console.log(product.name.includes(search));
        if(product.name.includes(search)) {
            matched.push(product);
        }
    }
    return matched;  
}

const result =  matchedProducts(products, 'phone')
console.log(result);