function findProduct(arr) {
    // var res = ""
    // var initailProduct = 1;
    // for (let i = 0; i < arr.length; i++) {
    //     var product = 1
    //     if (i > 0) {
    //         initailProduct = initailProduct * arr[i - 1]
    //     }

    //     for (let j = i; j < arr.length - 1; j++) {
    //         product = product * arr[j + 1]
    //     }
    //     res += initailProduct * product + " "
    // }
    // return res

    var n = arr.length
    if (n == 1) {
        return 0;
    }

    var temp = 1;
    var productArray = []
    for (i = 0; i < n; i++) {
        productArray.push(temp)
        temp *= arr[i];
    }

    temp = 1;
    for (i = n - 1; i >= 0; i--) {
        productArray[i] *= temp;
        temp *= arr[i];
    }
    var res = ''
    productArray.forEach((row) => {
        res += row + " "
    })
    return res;

}

function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number)
        console.log(findProduct(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
      5
      1 2 3 4 5
      3
      3 2 7`);
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