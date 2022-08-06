/**
 * 1) Write a function called foo() which prints “foo” and a function called bar() which prints 
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call 
the foo() to see the output.
*/
function foo() {
    console.log('foo');
    bar();

}
function bar() {
    console.log('bar');

 }
 foo();

/**
* 2) Write a function called make_avg() which will take an three integers and return the 
average of those values.
*/
/**
 * function make_avg(num1, num2, num3){
    const sum = num1+num2+num3;
    const average= sum/3;
    return average;
    
}
const avrgOfTheNumbers = make_avg(56,65,43);
console.log('Avearge of the numbers:',avrgOfTheNumbers.toFixed(2));
 */


/**
 * 3) Challenging: Write a function called make_avg() which will take an array of integers and 
the size of that array and return the average of those values.
 */

var array = [20,30,40,50,60,39,23,54,64,32,12,89];

function make_avg(arr) {
    var total = 0;
    for (i in arr){
      total += arr[i];
}
var average = total / array.length;
return average.toFixed(2);
}
console.log(make_avg(array));


/**
 * 4) Write a function called odd_even() which takes an integer value and tells whether this 
value is even or odd. You need to do it in 4 ways: 
● Has return + Has parameter
● No return + Has parameter
 */

function odd_even(number){
    if(number % 2 === 0){
        return (number + " is even number.");
    }
    else{
        return (number + " is odd number.");
    }
}
var type = odd_even(4);
console.log(type);


/**
 * 5) You are in a hurry to go to your school on time. But when you are crossing the road, the 
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in 
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a 
variable called signal. Its value can be green, yellow or red & we will get different activities as 
output depending on the variable. So, hurry up.
*/

// If Else Statement
function currentSignal(signal){

if(signal === 'red'){
    console.log('If you try to cross the road, you may be in danger.');
}else if(signal === 'yellow'){
    console.log('If you notice a yellow colored traffic signal, you should stop.');
}else if(signal === 'green'){
    console.log('If you notice a green coloured traffic signal, you should cross the road.');
}else{
    console.log('Hurry got to school!');
}
return currentSignal;
}

let sig = currentSignal('green');
console.log(sig);


/**
 * ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) 
 * আউটপুট হিসেবে দেখাবে।
 */
function multiplication(number){
    for(i=1;i<=10;i++){
        console.log("multiplication:", number, "x", i,'=', number*i);
    }
}
multiplication(13);


/**
 * ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
 * 
 */
// Uppercase to LowerCase
function lowerCase(name){
    return name.toLowerCase();
}
var sentence = lowerCase("Hello!, How are you?");
console.log(sentence);

// Lowercase to Uppercase
function upperCase(name){
    return name.toUpperCase();

}
var sentence = upperCase("Hello!, How are you?");
console.log(sentence);


/**
 * ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে।
 * 
 */
function fullName (firstName, lastName){
    return firstName + " " + lastName;
}
//var firstName = 'Hasib'
//var lastName = 'Ferdous'

var name = fullName ('Hasib', 'Ferdous')
console.log(name);

/**
 * ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
 */

function square(number){
    return number*number;
}
var squareOutput= square(5);
console.log(squareOutput);

/**
 * ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা।
 */

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }
console.log(Object.values(pizza)[0][2]);