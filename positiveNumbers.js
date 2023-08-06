/* 
এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি 
পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array
 এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ 
 করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
*/

function positiveNumbers(nums) {
    let positiveNums = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {
            positiveNums.push(nums[i]);
        } else {
            break;
        }
    }
    return positiveNums;
}

const posNums = [12,88,52,11,30,-20,45,69,-25,12];
console.log(positiveNumbers(posNums)); //Output [ 12, 88, 52, 11, 30 ]