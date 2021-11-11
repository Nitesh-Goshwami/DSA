
function lowerBound(arr,low,high,k) {
    let ans = -1;
    while(low <= high) {
        var mid  = Math.floor(low+(high-low)/2) 
        if(arr[mid] === k) {
            ans = mid;
            high = mid-1
        }
        else if(arr[mid] < k) {
            low = mid+1
            
        } else {
            high = mid-1
        }
    }
    return ans;
}

function upperBound(arr,low,high,k) {
    let ans = -1;
    while(low <= high) {
        var mid  = Math.floor(low+(high-low)/2) 
        if(arr[mid] === k) {
            ans = mid 
        }
        if(arr[mid] > k) {
            high = mid-1
        } else {
            low = mid+1
        }
    }
    return ans;
}

var count = 0;
function numberOfOccurance(arr, low, high, k) {
    if (low > high) {
        return -1
    } else {
        var mid = Math.floor(low + (high - low) / 2)
        if (arr[mid] === k) {
            count++
        }
        numberOfOccurance(arr, mid + 1, high, k)
        numberOfOccurance(arr, low, mid - 1, k)

    }
    return count;
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim()
    var k = +input[2].trim()
    var arr = input[1].trim().split(" ").map(Number)
    var low = 0;
    var high = n - 1
    var res = lowerBound(arr,low,high,k) + " " + upperBound(arr,low,high,k) + " " + numberOfOccurance(arr, low, high, k)
    console.log(res)
}
if (process.env.USERNAME === "goswa") {
    runProgram(`7
    1 1 1 2 2 3 3
    2`);
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