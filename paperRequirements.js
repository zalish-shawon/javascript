/*
আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। 
যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। 
প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। 
সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। 
আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। 
অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।  
*/

function paperRequirements(printBook1, printBook2, printBook3) {
    const pageForBook1 = 100;
    const pageForBook2 = 200;
    const pageForBook3 = 300;
    const firstBookPages = pageForBook1 * printBook1;
    const secondBookPages = pageForBook2 * printBook2;
    const thirdBookPages = pageForBook3 * printBook3;

    const totalAmountOfPages = firstBookPages + secondBookPages + thirdBookPages;
    
    return totalAmountOfPages + " pages";
}

console.log(paperRequirements(5,6,8)); // Output 4100 pages