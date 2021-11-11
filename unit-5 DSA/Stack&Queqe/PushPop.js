// arr.push(value)

// var top = -1
// function push(data,stack) {
//     top++;
//     stack[top] = data;
// }

// function pop(stack) {
//     if(top >=0) {
//         top--;
//     } else {
//         console.log("Empty Stack")
//     }
// }
// function peak() {
//     console.log(stack[top]);
// }




function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();

    var stack = [];
    for(let i = 1; i <=testCases;i++) {
        // To push element in the stack
        var push_element = input[i].trim().split(" ").map(Number)
        if(push_element.length > 1) {
            var data = push_element[1]
            stack.push(data)

        // To pop element from the stack
        } else if(+input[i] === 2) {
            if(stack.length > 0) {
                stack.pop()
            } 
            // else {
            //     console.log("Empty!")
            // }  

        // To print element from the stack
        } else {
            if(stack.length > 0) {
                var top = stack.pop()
                console.log(top)
                stack.push(top)
            } else {
                console.log("Empty!")
            }
        }
    }
    }
  if (process.env.USERNAME === "goswa") {
      runProgram(`6
      1 15
      1 20
      2
      3
      2
      3
      `);
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