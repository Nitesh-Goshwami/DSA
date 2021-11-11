var arr = [1, 2, 3, -2, 5]
var temp = -1000000000000000000000000000000000
// for (let i = 0; i < arr.length; i++) {
    // var subArr = []
    var sum = 0
    for (let j = 0; j < arr.length; j++) {
        // subArr.push(arr[j]);
        //  sum = subArr.reduce((ac, el) => {
        //     return ac + el
        // })
        sum += arr[j] 
        if (sum >= temp) {
            temp = sum
        }
    }
// }
console.log(temp)
