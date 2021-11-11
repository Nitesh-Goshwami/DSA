// function countOcurence(k, arr) {
//     var count = 1;
//     var res = "";
//     if(arr.length === 1) {
//         return arr[0]
//     }
//     for(let i = 0; i < arr.length-1; i++) {
//         if(arr[i] === arr[i+1]) {
//             count ++;
//         } else {
//             count = 1
//         }
//         if(count > k) {
//             res = arr[i] + " ";
//             break;
//         }
//     }
//     if(res == "") {
//         return -1;
//     }
//     return res;
// }

// Approch 2
function countOcurence(k, arr) {
}




function runProgram(input) {
    var input = input.split("\n");
    var testCases = +input[0];
    var j = 1; 
    for(let i = 1; i<= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number);
        var k = n/2 //Half of the N
        arr.sort((a,b) => {
            return a -b
        })
        console.log(countOcurence(k, arr))
    }
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`1
      1
2`);
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