// Write a function to convert temperature from Celsius to Fahrenheit.
// ফারেনহাইট = (সেলসিয়াস × ৯ ÷ ৫) + ৩২

function convert(Celsius){
    let Fahrenheit = ( Celsius * 9 / 5 ) + 32;
    return Fahrenheit;
}
let Fahrenheit = convert(12);
console.log(Fahrenheit)
