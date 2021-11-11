function swap (i,j) {
    var temp = i;
    i = j;
    j = temp;
}

function sortAward(arr) {
    var zero = "";
    var one = "";
    var two = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero += arr[i] + " ";
        } else if (arr[i] === 1) {
            one += arr[i] + " ";
        } else  {
            two += arr[i] + " "
        }
    }
    return (zero + one + two)
    // var low = 0 
    // var high = arr.length-1;
    // var mid = 0
    // while(mid <= high) {
    //     switch(arr[mid]) {
    //         case 0 : {
    //             swap(arr[low], arr[mid]);
    //             low++;
    //             mid++;
    //             break;
    //         }
    //         case 1 : {
    //             mid++;
    //             break;
    //         }
    //         case 2 : {
    //             swap(arr[low], arr[mid]);
    //             high--
    //             break;
    //         }
    //     }
    // }
    // return arr;
}


function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim();
        var arr = input[j++].trim().split(" ").map(Number)
        console.log(sortAward(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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