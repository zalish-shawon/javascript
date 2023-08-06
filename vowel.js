function findingVowel(vowel) {
    let countVowel = 0;
    for(i = 0; i < vowel.length; i++) {
        if(vowel[i] == 'a' ||vowel[i] == 'e' ||vowel[i] == 'i' ||vowel[i] == 'o' ||vowel[i] == 'u') {
            countVowel ++ ;
        }
    }
    return countVowel;
}

console.log(findingVowel("This is the bangladesh. this is our homeland"))