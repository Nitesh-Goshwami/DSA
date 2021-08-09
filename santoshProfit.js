function NumberOfWays(n) {
    if(n == 0) { 
        return 1;
    } 
    else if (n < 0) {
        return 0;
    } else {
        return NumberOfWays(n-4) + NumberOfWays(n-8)
    }
}


function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
      var num = +input[j++].trim();
      console.log(NumberOfWays(num));

    }
}
  if (process.env.USERNAME === "ASUS") {
      runProgram(`1
      12`);
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