const products = [
    {id: 1, name:'Smartphone', price: 8500},
    {id: 2, name:'TV', price: 2500},
    {id: 3, name:'Notebook', price: 15250},
    {id: 4, name:'Headphones', price: 750},
    {id: 5, name:'Monitor', price: 3500},
];

const productDiscount = products.map((product) => {
    const discount = product.price * 0.1;
    const priceDiscount = product.price - discount;
    return {
        name: product.name,
        newPrice: priceDiscount,
        discount: discount,
    }
});

console.log(productDiscount);

