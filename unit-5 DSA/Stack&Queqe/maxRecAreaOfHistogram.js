// Brute Force
// function area(arr) {
//     var temp = 0;
//     var area = -1000000000000000000000000000000000000 
//     var left;
//     var right;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i; j>=0; j--) {
//             if(arr[j] < arr[i]) {
//                 left = j
//                 break;
//             } else {
//                 left = -1
//             }
//         }
//         for(let k = i; k < arr.length; k++) {
//             if(arr[k] < arr[i]) {
//                 right = k
//                 break;
//             } else {
//                 right = arr.length
//             }
//         }
//         temp = (right-left-1)*arr[i]
//         if(temp > area) {
//             area = temp
//         }
//     }
//     return area
// }


// Optimized using stack

function area(arr) {
    // Finding next smallest Element on left side
    
    var max_area = 0;
    var left = Array(arr.length).fill(0)
    var stack1 = [];
    stack1.push(0)
    var top = 0
    left[0] = -1
    for(let i = 1; i < arr.length; i++) {
       while(stack1.length > 0 && arr[i] < arr[stack1[top]]) {
           stack1.pop()
           top--
       }
       if(stack1.length === 0) {
           left[i] = -1
       } else {
           left[i] = stack1[top]
       }
       stack1.push(i)
       top++
    }
    // console.log(left)


    // Finding next smallest Element on right side

    var right = Array(arr.length).fill(0)
    var stack2 = [];
    stack2.push(arr.length)
    var peek = 0
    right[arr.length-1] = arr.length
    for(let i = arr.length-1; i >=0; i--) {
        while(stack2.length > 0 && arr[i] < arr[stack2[peek]]) {
            stack2.pop()
            peek--
        }
        if(stack2.length === 0) {
            right[i] = arr.length
        } else {
            right[i] = stack2[peek]
        }
        stack2.push(i)
        peek++
      }
    //   console.log(right)
      for(let i = 0; i < arr.length; i++) {
          var temp = (right[i]-left[i] - 1)*arr[i];
          if(temp > max_area) {
              max_area =temp
          }
      }
      return max_area
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim()
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim()
        var arr = input[j++].trim().split(" ").map(Number);
        console.log(area(arr))
    }
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`2
      4
      2 3 4 5
      6
      7 5 4 3 6 8`);
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