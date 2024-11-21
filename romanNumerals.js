function toRomanNumeral(number) {
    if (number <= 0 || number >= 4000) {
      console.log("Number must be between 1 and 3999.");
    }
  
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];
  
    let result = "";
  
    for (const { value, numeral } of romanNumerals) {
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
  
    return result;
  }
  console.log(toRomanNumeral(1987));
console.log(toRomanNumeral(44));
console.log(toRomanNumeral(0));
