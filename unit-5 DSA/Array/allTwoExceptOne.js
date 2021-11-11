function findException(arr) {
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            var count = obj[arr[i]];
            obj[arr[i]] = count + 1
        }
    }
    for (key in obj) {
        if (obj[key] === 1) {
            return key
        }
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number)
        console.log(findException(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
      1
      5
      5
      1 2 1 3 2`);
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