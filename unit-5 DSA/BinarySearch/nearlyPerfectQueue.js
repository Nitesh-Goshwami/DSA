function searchInQueue(arr,low,high,k) {
    while(low<=high) {
        var mid = Math.floor(low + (high-low)/2);
        if(arr[mid] === k) {
            return mid;
        } else if(arr[mid] < k) {
            low = mid + 1
        } else {
            high = mid-1
        }
    }
    return -1
}


function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for(let i = 1; i <= testCases; i++) {
        var lines  = input[j++].trim().split(" ").map(Number);
        var n = lines[0];
        var k = lines[1]
        var arr  = input[j++].trim().split(" ").map(Number);
        var low = 0; 
        var high = n -1
        var oddArr = []
        var evenArr = []
        for(let j = 0; j < n ;j++) {
            if(j % 2 === 0) {
                evenArr.push(arr[j])
            } else {
                oddArr.push(arr[j])
            }
        }
        var a = searchInQueue(evenArr,low,high,k)
        var b = searchInQueue(oddArr,low,high,k)
        
        if(a===b) {
            console.log("Not Found")
        } else if(a >= 0){
            var res = a*2
            console.log(res)
        } else {
                var res = b*2+1
            console.log(res)
        }
    }
    
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`1
      9 70
      10 3 40 20 80 70 90 95 100`);
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