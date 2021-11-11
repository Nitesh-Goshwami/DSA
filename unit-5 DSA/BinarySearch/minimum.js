
function Minimum(arr, n) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
        var mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < arr[high]) {
            high = mid;
        } else {
            var ans = mid
            low = mid + 1
        }
    }
    return arr[low];
}



function runProgram(input) {
    var input = input.trim().split("\n");
    var lines = input[0].trim().split(" ").map(Number)
    var n = lines[0]
    var k = lines[1];
    var arr = input[1].trim().split(" ").map(Number)
    console.log(Minimum(arr, n))
}
if (process.env.USERNAME === "goswa") {
    runProgram(`10 -1
    4 5 6 7 8 9 0 1 2 3`);
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