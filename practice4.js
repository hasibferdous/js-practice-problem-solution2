//slice

//splice

//remove duplicate item from array
const number = [2,4,5,6,4,2,7,6,8,9];

function removeDuplicate(number){
    const unique = [];
    for(let i=0; i< number.length; i++){
        const numbers = number[i];
        if(unique.includes(numbers) === false){
            unique.push(numbers);
        }
        
        }
        return unique;
    }
const uniqueNumbers = removeDuplicate(number);
console.log(uniqueNumbers);


//------------------------------------------------
//show output from: 1-50
//if the number is divisible by 3 then instead of number show 'foo'
//if the number is divisible by 5 then instead of number show 'bar'
//if the number is divisible by both 3 & 5 then instead of number show 'foobar'

for (let i = 1; i<=50; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log('foobar');
    }
    else if(i%3 === 0){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }

    else{
    console.log(i);
    }
}

//-----------------------------------------------

//chair - 3 cft wood required per chair
//table - 10cft wood required per table
//bed -50cft wood required per bed
//fixed item: per item wood requirements
//vary: quantity

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood =3;
    const perTableWood = 5;
    const perBedWood = 50;
    
    const chairWood = chairQuantity* perChairWood;
    const tableWood = tableQuantity*perTableWood;
    const bedWood = bedQuantity*perBedWood;

    //console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = chairWood+tableWood+bedWood;
    return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log('total wood required:', totalWood);

//-----------------------------------------------------
const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 45000, color:'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color:'silver'},
    {name: 'iphone', camera: 14, storage: '32gb', price: 85000, color:'silver'},
    {name: 'Xaomi', camera: 12, storage: '32gb', price: 55000, color:'silver'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 15000, color:'white'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 55000, color:'silver'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 50000, color:'silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i=0; i< phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price){
            cheapest = phone;

        }
    }
    return cheapest;
    
}
const selection = cheapestPhone(phones);
console.log(selection);

//----------------------------------------------

//shopping cart

const shoppingCart = [
    {name: 'shoe', price: 1200 },
    {name: 'shirt', price: 2500 },
    {name: 'pant', price: 2200 },
    {name: 'belt', price: 700 },
]
function totalCost(products){
    let sum = 0;
    for(let i =0; i< products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        console.log(product);

    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log("total Expense:",expense);


//--quantity cart 

const quantityCart = [
    {name: 'shoe', price: 1200 , quantity: 2 },
    {name: 'shirt', price: 2500, quantity: 3 },
    {name: 'pant', price: 2200 , quantity: 5 },
    {name: 'belt', price: 700  , quantity: 4},
]
function totalQCost(products){
    let sum1 = 0;
    for(let i =0; i< products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum1 = sum1 + productTotal;
        console.log(product);

    }
    return sum1;
}
const qunatityExpense = totalQCost(quantityCart);
console.log("total quantity Expense :", qunatityExpense);



//-------------------------------------------

//discount
//1. if ticket number is less than 100,then per ticket price: 100
//2. if ticket number is more than 100 but less than 200,then first 100 ticket price: 100, rest ticket price will be 90 taka per piece
//3. if you purchase more than 200 tickets
    //first 100-- 100 taka
    //101-200 -- 90 taka
    //200+ -- 70 taka

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100* first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100* first100Rate;
        const second100Price = 100* second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity* restTicketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
}
const price = ticketPrice(126);
console.log('price:', price);
