/* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট 
প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
 */

function bestFriend(names){
    // console.log(names);
    let largeChrName = names[0];
    for (let i = 0; i < names.length; i++ ) {
        if (names[i].length > largeChrName.length) {
            largeChrName = names[i];
        }
    }
    return largeChrName;
}

const friendsNames = ["Bradly", "Tatyana", "Sophie", "Kate Winslate", "Simon", "Jaiden"]
console.log(bestFriend(friendsNames)); // Output Kate Winslate