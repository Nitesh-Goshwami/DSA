function rotateArray(arr, n, k) {
    k = k % n;
    if (k == 0) {
      return arr;
    } else {
      var res = arr.reverse();
      var left1 = 0;
      var right1 = k - 1;
      var leftArr = res.splice(0,k-1);
      var rightArr = res.splice(n);
    //   while (left1 < right1) {
    //     let temp = res[left1];
    //     res[left1] = res[right1];
    //     res[right1] = temp;
    //     left1++;
    //     right1--;
    //   }
    //   var left2 = k;
    //   var right2 = n - 1;
    //   while (left2 < right2) {
    //     let temp = res[left2];
    //     res[left2] = res[right2];
    //     res[right2] = temp;
    //     left2++;
    //     right2--;
    //   }
    //   return res
    }
  }

// function rotateArray(arr, n, k) {
//   k = k % n;
//   if (k == 0) {
//     return arr;
//   } 
//   var temp = []
//   for (let i = 0; i < k; i++) {
//     temp.push(arr[i])
//   }
//   return temp
// }



function runProgram(input) {
  var input = input.trim().split("\n");
  var testCases = +input[0];
  var j = 1;
  for (let i = 1; i <= testCases; i++) {
    var query = input[j++].trim().split(" ").map(Number);
    var arr = input[j++].trim().split(" ").map(Number);
    var k = query[1];
    var n = query[0];
    // var output = rotateArray(arr, n, k);
    // var temp = "";
    // output.forEach((row) => {
    //   temp += row + " "
    // });
    // console.log(temp);
    rotateArray(arr, n, k);
  }
  
}
if (process.env.USERNAME === "goswa") {
  runProgram(`3
      3 1
      1 2 3
      2 2
      1 2
      2 3
      1 2`);
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