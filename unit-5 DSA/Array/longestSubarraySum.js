function longestSum(arr) {
    // var temp = Number.MIN_VALUE
    var temp = -111111111000000000000000000000
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum > temp) {
            temp = sum;
        }
        if(sum < 0) {
            sum = 0
        }
    }
    return temp
}


function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    var j = 1; 
    for(let i = 1; i<= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number);
        console.log(longestSum(arr))
    }
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`3
      3
      1 2 3
      4
      -1 -1 0 1
      3
      2 -1 2`);
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