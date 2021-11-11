// Brute Force(O(n**2),O(1))
// function rainwater(arr) {
//     var count = 0;
//     for(let i = 1; i < arr.length-1; i++) {
//         var left = arr[i];
//         for(let j = 0; j < i; j++) {
//             left = Math.max(left,arr[j])
//         }
//         var right = arr[i];
//         for(let k = i+1; k < arr.length; k++) {
//             right = Math.max(right,arr[k])
//         }
//         count += Math.min(left,right) - arr[i]
//     }
//     return count
// }

// // O(n),O(n)

// function rainwater(arr) {
//     var count = 0;
//     var left = Array(arr.length).fill(0)
//     left[0] = arr[0]
//     var right = Array(arr.length).fill(0)
//     right[arr.length - 1] = arr[arr.length - 1]

//     for (let i = 1; i < arr.length; i++) {
//         left[i] = Math.max(left[i - 1], arr[i])
//     }
//     for (let i = arr.length - 2; i >= 0; i--) {
//         right[i] = Math.max(right[i + 1], arr[i])
//     }
//     for (let i = 0; i < arr.length; i++) {
//         count += (Math.min(left[i], right[i]) - arr[i])
//     }
//     return count
// }

// O(n),O(1)

function rainwater(arr) {
    var count = 0;
    left_max = 0;
    right_max = 0

    for (let i = 1; i < arr.length; i++) {
        left[i] = Math.max(left[i - 1], arr[i])
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        count += (Math.min(left[i], right[i]) - arr[i])
    }
    return count
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var testCases = +input[0].trim();
    var j = 1;
    for (let i = 1; i <= testCases; i++) {
        var n = +input[j++].trim()
        var arr = input[j++].trim().split(" ").map(Number);
        console.log(rainwater(arr))
    }
}
if (process.env.USERNAME === "goswa") {
    runProgram(`2
      5
      3 2 0 4 6
      7
      7 0 3 6 2 3 5`);
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