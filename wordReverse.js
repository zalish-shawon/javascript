function wordReverse(str) {
    const words = str.split(' '); // using space because we needed space between a words.
    console.log(words);
    const result = [];
    for (let i = words.length-1; i >= 0; i--) {
        let word = words[i];
        result.push(word);
        
    }
    const reversed = result.join(' ');
    return reversed;
}

const myStr = "I am a good boy";
console.log(wordReverse(myStr));