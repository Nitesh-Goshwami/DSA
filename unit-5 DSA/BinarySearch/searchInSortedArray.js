// Itirative method
function binarySearch(arr, low, high, k) {
    while (low <= high) {
        var mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] == k) {
            return mid;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }
    return -1
}

// Recursive method
// function binarySearch(arr, low, high, k) {
//     // base Case
//     if (low > high) {
//         return -1
//     }

//     while (low <= high) {
//         var mid = Math.floor(low + (high - low) / 2);
//         if (arr[mid] === k) {
//             return mid;
//         } else if (arr[mid] > k) {
//             // high = mid - 1
//             binarySearch(arr, low, mid - 1, k)
//         } else {
//             // low = mid + 1
//             binarySearch(arr, mid + 1, high, k)
//         }
//         // return -1
//     }
// }


// Step 1 Find Minimum
function Minimum(arr, n) {
    let low = 0;
    let high = n - 1;

    while (low < high) {
        var mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < arr[high]) {
            high = mid;
        } else {
            low = mid + 1
        }
    }
    return low;
}

// Step 2 Check Last Element of array

function searchNumber(arr, n, k) {
    if (k > arr[n - 1]) {
        var low = 0;
        var high = Minimum(arr, n) - 1
        return binarySearch(arr, low, high, k)
    } else {
        low = Minimum(arr, n);
        high = n - 1
        return binarySearch(arr, low, high, k)
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var lines = input[0].trim().split(" ").map(Number)
    var n = lines[0]
    var k = lines[1];
    var arr = input[1].trim().split(" ").map(Number)
    console.log(searchNumber(arr, n, k))
}
if (process.env.USERNAME === "goswa") {
    runProgram(`10 -1
    4 6 7 9 10 -1 0 1 2 3`);
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