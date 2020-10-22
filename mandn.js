// 3. Write a function that returns M random non-negative integers less than some value N, where M and N are arbitrary integers, and each output integer is unique.

function generateRange(M, N) {
    min = 0 < N ? 0 : N;
    max = N > 0 ? N : 0;
    var resultArr = [], randNumber;
    while ( M > 0) {
        randNumber = Math.round(min + Math.random() * (max - min));
        if (resultArr.indexOf(randNumber) === -1) {
           resultArr.push(randNumber);
           M--;
        }
    }
    return resultArr;
}

generateRange(4, 5);