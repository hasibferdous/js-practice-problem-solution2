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

