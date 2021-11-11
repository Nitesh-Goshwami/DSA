// // Brute Force
// function searchElement(arr,k) {
//     for(let i = 0; i< arr.length; i++) {
//         for(let j = 0;j < arr[i].length; j++) {
//             if(arr[i][j] == k) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// two pointer approch 

function searchElement(arr,k,n,m) {
    var i = 0;
    var j = m - 1
    while (i < n && j >= 0) {
        if(arr[i][j] === k) {
            return true
        } else if(arr[i][j] > k) {
            j--
        } else {
            i++;
        }
    }
    return false 
}




function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    
    for (let i = 1; i <= testCases; i++) {
        var arr = []
        var rows = input[j++].trim().split(" ").map(Number);
        var n = rows[0]
        var m = rows[1]
        for (let k = 0; k < n; k++) {
            arr.push(input[j++].trim().split(" ").map(Number))
        }
        var k = +input[j++]
        console.log(searchElement(arr,k,n,m))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`1
    5 6
106 108 117 132 132 156
203 210 210 215 224 235
420 427 455 463 527 543
883 888 902 932 975 988
1654 1799 1833 1864 1996 2210
427
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