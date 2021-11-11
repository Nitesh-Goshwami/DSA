var count = 0;
function numberOfOccurance(arr, low, high, k) {
    if (low > high) {
        return -1
    } else {
        var mid = Math.floor(low + (high - low) / 2)
        if (arr[mid] === k) {
            count++
            // ans = mid;
            // high = mid-1
        }
        numberOfOccurance(arr, mid + 1, high, k)
        numberOfOccurance(arr, low, mid - 1, k)

    }
    return count;
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var lines = input[0].trim().split(" ").map(Number)
    var n = lines[0]
    var k = lines[1];
    var arr = input[1].trim().split(" ").map(Number)
    var low = 0;
    var high = n - 1
    console.log(numberOfOccurance(arr, low, high, k))
}
if (process.env.USERNAME === "goswa") {
    runProgram(`10 7
      0 2 4 4 5 5 7 7 9 10`);
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