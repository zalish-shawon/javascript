/*
The function staircase takes an integer parameter n, which represents the height of the staircase. Inside the function, there's a loop that iterates from 1 to n.

For each iteration of the loop, it calculates two values:

spaces: The number of spaces needed on the left side of the row. This is calculated as the difference between the total number of rows (n) and the current row number (i). This ensures that as you move from top to bottom, the number of spaces decreases.
hashes: The number of # symbols needed on the right side of the row. This corresponds to the current row number (i). As you move from top to bottom, the number of # symbols increases.
Next, two strings are created:

spaceStr: A string containing the required number of spaces, created using the repeat method on a space character ' '.
hashStr: A string containing the required number of # symbols, created using the repeat method on a # character.
The final step in each iteration is to print the concatenated string of spaceStr and hashStr to the console. This string represents a single row of the staircase pattern.

The loop repeats for each row, gradually creating the entire staircase pattern.

Outside the function, you can call it with a specific value of n to see the resulting staircase pattern. In the example provided, n is set to 6.
 */

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = n - i;
        const hashes = i;

        const spaceStr = ' '.repeat(spaces);
        const hashStr = '#'.repeat(hashes);

        console.log(spaceStr + hashStr);
    }
}
console.log(staircase(4));

