function isEmpty(stack) {
    if (stack.length === 0) {
        return true;
    }
    return false;
}


function balanceBrackets(arr) {
    if(arr.length % 2 !=0 ) {
        return "not balanced"
    }
    var stack = [];
    for(let i = 0;i < arr.length;i++) {
        if(arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
            stack.push(arr[i])
        } else {
            if(isEmpty(stack)) {
                return "not balanced"
            } else {
                var top = stack.pop()
                if(top === "(" && arr[i] === ")") {
                    continue;
                } else if(top === "{" && arr[i] === "}") {
                    continue;
                } else if(top === "[" && arr[i] === "]") {
                    continue;
                } else {
                    return "not balanced"
                }
            }
        }
    }
    if(isEmpty(stack)) {
        return "balanced"
    } else  {
        return "not balanced"
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim()
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var arr = input[j++].trim().split("");
        console.log(balanceBrackets(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`3
    {[()]}
    {[(])}
    {{[[(())]]}}
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