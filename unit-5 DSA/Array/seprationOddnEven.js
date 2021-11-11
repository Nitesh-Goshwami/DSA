function oddnEven(arr, q) {
    var odd = ""
    var even = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd += arr[i] + " ";
        } else {
            even += arr[i] + " ";
        }
    }
    if(q === 1) {
        var res = even + odd
    } else {
        var res = odd + even
    }
    return res
}

function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number);
        var q = +input[j++].trim();
        // arr.sort((a, b) => {
        //     return a - b
        // })
        console.log(oddnEven(arr, q))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
      6
      1 3 5 2 7 4
      1
      6 
      1 3 5 2 7 4
      2`);
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