const sumAll = function(first, last) {
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR"; // using isNaN() or typeof would not work
    if (first < 0 || last < 0) {
        return `ERROR`;
    }
    let final = 0;
    for (let i = Math.min(first, last); i < Math.max(first, last) + 1; i++){
        final += i;
    } return final;
};

// Do not edit below this line
module.exports = sumAll;
