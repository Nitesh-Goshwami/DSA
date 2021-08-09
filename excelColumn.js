function excelColumn(str) {
  var alpha = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  var sum = 0;

  function map(k) {
      for (let i = 0; i <alpha.length; i++) {
          if (k == alpha[i]) {
              return num[i];
          }
      }
  }
 
  for (let i = 0; i < str.length; i++) {
      sum = sum*26 + map(str[i]);
      
  }
  return sum
}


function runProgram(input) {
  var input = input.split("\n");
  var testCases = +input[0].trim();
  var j = 1
  for (var i = 1; i <= testCases; i++) {
      var str = input[j++].trim();
      console.log(excelColumn(str));
  }
  }
if (process.env.USERNAME === "ASUS") {
    runProgram(`3
    A
    AB
    ZY`);
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