sumOfOthers = (arr) => {
    return arr.map(x => arr.reduce((a,b) => a + b) - x)
}

let test = [1,2,3,4,5,6,12];

console.log(sumOfOthers(test));