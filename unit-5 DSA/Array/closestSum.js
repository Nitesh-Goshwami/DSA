function findSum(arr, k) {
    let initialSum = Number.MAX_VALUE;
    if (arr.length < 3) {
        return 0;
    }
    for (let j = 0; j < arr.length - 2; j++) {
        let l = j + 1;
        let r = arr.length - 1;
        while (l < r) {
            let sum = arr[j] + arr[l] + arr[r];
            if (Math.abs(k-initialSum) > Math.abs(k - sum)) {
                initialSum = sum;
            } else if (Math.abs(k-initialSum) === Math.abs(k - sum) && sum > initialSum) {
                initialSum = sum;
            } 
            if(sum > k) {
                r--
            }
            else {
               l++
            }
        }
    }
    return initialSum;
}



function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var query = input[j++].trim().split(" ").map(Number);
        var arr = input[j++].trim().split(" ").map(Number);
        var k = query[1];
        arr.sort((a, b) => {
            return a - b
        })
        console.log(findSum(arr, k))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`1
    3 5
    1 -3 -3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}