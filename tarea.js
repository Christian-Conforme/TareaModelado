function roman(roman) {
    if (roman=='I') {
        return 1;
    }else if (roman === 'V')
        return 5;
        if (roman === 'X') {
            return 10;
        } else if (roman === 'II')
            return 2;
       
}


console.log("el Número es",roman("I")); 
console.log("el Número es",roman("V"));
console.log("el Número es",roman("X"));
console.log("el Número es",roman("II"));


