const userName = 'blackPink';
const userInput = "blackPinK";

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());
if(userName.toLowerCase()=== userInput.toLowerCase()){

    console.log('Valid User:'); 
}
else {
    console.log('Invalid User:');
}



const intro = ['Hi ! I am Hasib Ferdous.'];

const searchString = 'Pakhi';
const doesExist = intro.includes('pakhi');
//const doesExist = intro.includes('Pakhi');
//const doesExist = intro.includes('pakhi');

console.log(doesExist);

