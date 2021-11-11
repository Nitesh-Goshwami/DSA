// // Bruteforce
// function removeDuplicates(arr) {
//     var res = "";
//     var elementCount = 0
//     var temp = -1
//     for(var i = temp+1; i < arr.length; i++) {
//         var count = 1;
//         for(var j = i+1; j < arr.length; j++) {
//             temp = j;
//             if(arr[i] === arr[j]) {
//                 count++
//             } else {
//                 break;
//             }
//         }
//         if(count === 1) {
//             res += arr[i] + " "
//         }
        
//     }
//     elementCount = res.split(" ").length
//     console.log(elementCount-1)
//     return res
// }


// key value pair
function removeDuplicates(arr) {
    var obj = {};
    var count = 0;
    var res = ""
    for(let i = 0; i<arr.length; i++) {
        if (obj[arr[i]] ==undefined) {
            obj[arr[i]] = 1
            count++
        } else {
            obj[arr[i]]++
            
        }
    }
    console.log(count)
    for(key in obj) {
        res += key + " "
    }
    return res
}


function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for(let i = 1; i<=testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number)
        console.log(removeDuplicates(arr))
    }

   
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`2
      3
      1 2 3 4
      4
      1 1 3 3`);
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