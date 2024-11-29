function generatePattern() {
    const n = 5; // Number of rows for the upper half
    let pattern = "";

    // Function to generate a single row
    const generateRow = (i) => {
        const spaces = " ".repeat(n - i);
        const chars = Array.from({ length: i }, (_, j) =>
            i === 5 && j === 2 ? "5" : String.fromCharCode(65 + j)
        ).join(" ");
        return spaces + chars;
    };

    // Build the pattern
    for (let i = 1; i <= n; i++) pattern += generateRow(i) + "\n"; // Upper half
    for (let i = n - 1; i >= 1; i--) pattern += generateRow(i) + "\n"; // Lower half

    console.log(pattern);
}

generatePattern();
