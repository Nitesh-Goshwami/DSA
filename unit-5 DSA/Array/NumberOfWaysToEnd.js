function countWaysToJump(arr, enery, n) {
    var temp = 100000;
    var count = 0;
    if((temp - arr[n-1] ) > enery[n-1]) {
        return 0;
    }
    
    for (let i = n - 1; i >= 0; i--) {
        if(temp - arr[i] === enery[i]) {
            count++;
            temp = arr[i]
        } 
        else if(temp - arr[i] < enery[i]) {
            count = count + 1;
            temp = arr[i]
        }else {
            count--
        }
    }
    return count
}






function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim()
        var arr = input[j++].trim().split(" ").map(Number);
        var enery = input[j++].trim().split(" ").map(Number);
        console.log(countWaysToJump(arr, enery, n))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
      3
      99991 99994 99997
      3 3 3
      3
      1 4 7
      3 3 3`);
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