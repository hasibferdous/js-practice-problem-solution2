//----------------------------------------------
//feetToInch
//----------------------------------------------
function feetToInch(feet){
    //let feet = 20;
    let inch = feet*12;

    return inch;
}

let output = feetToInch(36.5);
console.log("Feet to Inch Output:", output);


//----------------------------------------------
//centimeterToMeter
//----------------------------------------------

function centimeterToMeter(centimeter){
    
    let meter = centimeter/100;

    return meter;
}

let outputValue = centimeterToMeter(2336.5);
console.log("Centimeter to Meter Output:", outputValue);

//----------------------------------------------
//paperRequirements
//----------------------------------------------

function paperRequirements(book1qunatity, book2qunatity, book3qunatity){
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;

    const book1 = book1qunatity* book1Page;
    const book2 = book2qunatity* book2Page;
    const book3 = book3qunatity* book3Page;

    //console.log(chairQuantity, tableQuantity, bedQuantity);
    const bookTotalPage = book1 + book2 + book3;
    return bookTotalPage;
}
const totalPage = paperRequirements(2, 2, 5);
console.log('total page required:', totalPage);

//----------------------------------------------
//bestFriend
//----------------------------------------------

friend = ['ashik','shakil','kausar','jahid','shuvo'];
function bestFriend(arra){

    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
            
        }
           
    }
    
    return ans;
    
}
let friends = bestFriend(friend);
console.log('longest string:', friends);

//----------------------------------------------
//positive integer
//----------------------------------------------
const number = [2,4,-5,6,-4,2,-7,6,8,-9];

function removeNegative(number){
    const unique = [];
    for(let i=0; i< number.length; i++){
        const numbers = number[i];
        if(numbers >= 0 ){
            unique.push(numbers);
            
            
       }
       
        }
        
        return unique;
        
    }
const uniqueNumbers = removeNegative(number);
console.log('The array without negative numbers:', uniqueNumbers);
