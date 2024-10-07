const numbers = [19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30,1]

const isPrime = (num) => {
    if (num <= 1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i === 0) return false;
    }
    return true;
}

const primeArray = numbers.filter(isPrime);

const max = Math.max(...primeArray);
const min = Math.min(...primeArray);
const sum = primeArray.reduce((acc,curr) => acc + curr,0);

console.log("Prime Numbers:",primeArray);
console.log("Maximum:",max);
console.log("Minimum:",min);
console.log("Sum:",sum);
