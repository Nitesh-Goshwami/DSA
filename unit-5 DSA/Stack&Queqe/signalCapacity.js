function isEmpty(stack) {
    if (stack.length === 0) {
        return true;
    }
    return false;
}


function signalPower(arr) {
    // var res = [];
    // var result = ""
    // for (let i = arr.length-1; i >= 0; i--) {
    //     var count = 1;
    //     for(let j = i - 1; j >=0 ; j--) {
    //         if(arr[i] >= arr[j]) {
    //             count ++
    //         } else {
    //             break
    //         }
    //     }
    //     res.push(count);
    // } 
    // for(let i = res.length-1; i >= 0; i--) {
    //     result += res[i] + " "
    // }
    // return result

    var stack = [];
    var res = ""
    stack.push(0);
    var top = 0;
    for(let i = 0; i< arr.length; i++) {
        while(!isEmpty(stack) && arr[stack[top]] <= arr[i]) {
            stack.pop()
            top--
        }
        res += isEmpty(stack) ? (i+1) + " " : (i-stack[top]) + " ";
        stack.push(i)
        top++;
    }
    return res
}




function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim()
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number);
        console.log(signalPower(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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