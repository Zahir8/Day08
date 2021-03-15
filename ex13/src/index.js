function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
console.log(randomRangeNumber(5, 18));
randomRangeNumber(2, 19);
module.exports = randomRangeNumber;