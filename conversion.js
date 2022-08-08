/**
 * Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
 */
let hour = 153;
let minute = hour*60;
console.log('Output time in minute:', minute ,"minutes");

/**
 * Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
 */

var array =[2023,2024,2025,2028,2030];

function finalLeapYear(array){
    let leapYearArrayPush =[];
    for(let i = 0; i < array.length; i++){
        let index = array[i];
        
    
    if((index%4 ===0)|| (index%400 ===0) && (index%100!==0)) {
        leapYearArrayPush.push(index);
        console.log('This year is a leap year');
    
    }
    
}
return leapYearArrayPush;
}
let final = finalLeapYear(array);
console.log(' leap years:', final );



/**
 * 
 *Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
 */

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumberOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

let myNumbers =  [5, 7, 8, 10, 45, 30];
let oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
let oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('All Odd Number Total Sum:', oddNumberSum);



/**
 * তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
 * 
 */
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
cToF(60);

/**
 * 
 * ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
 */

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

fToC(45);


/**
 * ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
 */



/**
 * ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
 */