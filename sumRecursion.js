function sum(arr,n,i) {
    if (i == n-2) {
        return 0;
    } else {
        i = i + 1
        return Math.abs(arr[i] - arr[i+1]) + sum(arr,n,i)
    }
}



function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0].trim();
    var j = 1; 
    var k = -1;
    for (let i = 1; i <= testCases; i++) {
        var n = input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number);
        console.log(sum(arr,n,k))
    }
    }
  if (process.env.USERNAME === "ASUS") {
      runProgram(`2
      3
      1 5 2
      5
      3 5 6 1 8`);
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