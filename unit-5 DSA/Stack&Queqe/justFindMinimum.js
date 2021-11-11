function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim();
    var stack = [];
    var min = 10000000000000000000000000000000000000
    for (let i = 1; i <= n; i++) {
        if (input[i].trim().split(" ").length === 2) { 
            if(stack.length === 0) {
                var pushEle = +input[i].trim().split(" ")[1];
                min = pushEle
                stack.push(pushEle)
            } else {
                var pushEle = +input[i].trim().split(" ")[1];
                if(pushEle < min) {
                    var diff = pushEle - min;
                    stack.push(diff)
                    min = pushEle
                } else {
                    stack.push(pushEle)
                }
                
            }
        } else if (input[i].trim() === "MIN") {
            if(stack.length === 0) {
                console.log("EMPTY")
            } else {
                console.log(min)
            }
            
        } else {
            if(stack.length === 0) {
                console.log("EMPTY")
            }
            var x = stack.pop()
            if(x < min) {
                min = min-x
            }
            
        }
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`26
    PUSH 100
    PUSH 50
    MIN
    PUSH 45
    MIN
    POP
    MIN
    POP
    MIN
    PUSH 20
    PUSH 19
    PUSH 21
    PUSH 21
    MIN
    POP
    MIN
    POP
    MIN
    POP
    MIN
    POP
    MIN
    POP
    POP
    POP
    MIN`);
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