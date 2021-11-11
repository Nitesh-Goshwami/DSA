function findIndex(arr) {
    if(arr.length<=2) {
        return -1
    }
    var totalSum = arr.reduce((ac,el) => {
        return ac+el
    })
    var temp = totalSum
    var sum = arr[0];
    for(let i = 1; i < arr.length-1;i++) {
        temp = totalSum - sum - arr[i];
        if(temp === sum) {
            return i+1
        } else {
            sum += arr[i]
        }
    }
    return -1
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr = input[1].trim().split(" ").map(Number);
    console.log(findIndex(arr))
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`5
      3 3 5 5 1`);
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