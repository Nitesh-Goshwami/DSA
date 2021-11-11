function upperBound(arr,low,high,k) {
    let ans = -1;
    while(low <= high) {
        var mid  = Math.floor(low+(high-low)/2) 
        if(arr[mid]> k) {
            ans  = mid;
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return ans;
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var lines = input[0].trim().split(" ").map(Number)
    var n = lines[0]
    var k = lines[1];
    var arr = input[1].trim().split(" ").map(Number)
    var low  = 0;
    var high = n-1
    console.log(upperBound(arr,low,high,k))
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`10 4
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