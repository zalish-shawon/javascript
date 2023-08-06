function findingtopperStudent(jimMarks, delaMarks, chinkuMarks) {
    if (jimMarks > delaMarks && jimMarks > chinkuMarks) {
        return jimMarks + " Jim";
    } else if (jimMarks < delaMarks && chinkuMarks < delaMarks) {
        return delaMarks + " Dela"
    } else {
        return chinkuMarks + " Chinku"
    }
}

console.log(findingtopperStudent(84,75,44));
console.log(findingtopperStudent(69,97,22));
console.log(findingtopperStudent(97,45,100));


