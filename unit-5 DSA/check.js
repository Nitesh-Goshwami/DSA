
// var map = new Map()

// var x = map.set(1,2)
// var y = map.set("a",1)
// console.log(y)
// // console.log(x)
// // console.log(map.has(2))
// console.log(map.set("a",map.get("a")+1))

// var obj = {1:2,3:4,5:6}



// map["b"] = 3;
// console.log(map.size)
// console.log(map)

// var arr = [...Array(1)].map(() => Array(256).fill(0));

// var arr = Array(256).fill(0)

// var arr = [3,5,1,4,4,8,7,6,9,0,-1,8]

// function mergeSort(arr) {
//     if(arr.length <= 1) {
//         return;
//     } else  {
//         var m = Math.floor(arr.length/2);
//         var leftArr = arr.slice(0,m);
//         var rightArr = arr.slice(m);

//         mergeSort(leftArr);
//         mergeSort(rightArr);
//         merge(leftArr,rightArr,arr)
//     }
// }


// function merge(left,right,arr) {
//     var i = 0;
//     var j = 0;
//     var k = 0
//     while(i < left.length && j < right.length) {
//         if(left[i] <= right[j]) {
//             arr[k] = left[i];
//             i++
//         } else {
//             arr[k] = right[j];
//             j++
//         }
//         k++;
//     }

//     while(i < left.length) {
//         arr[k] =left[i];
//         i++
//         k++
//     }

//     while(j < right.length) {
//         arr[k] = right[j]
//         j++
//         k++
//     }
// }
// mergeSort(arr)
// console.log(arr)


// var str = "abcd"

// for(let i = 0; i <= str.length; i++) {
//     for(let j = i; j <= str.length; j++) {
//         var x = str.substring(i,j)
//         console.log(x)
//     }
// }


// console.log((15 && !(15 & (15 - 1))))
// var str = "abcba"
// var arr = str.split("")
// if(arr.length == 1) {
//     console.log("Yes")
// } else {
//     var n = Math.floor(arr.length/2)
//     var count = 0
//     console.log(n)
//     for(let i = 0; i < n; i++) {
//         if(arr[i] == arr[arr.length-i-1]) {
//             continue;
//         } else {
//             console.log("No")
//             break;
//         }
//     }
// }
// var res = 0
// function count (x,y) {
//     if(y!=1) {
//         if(x!=1) {
//             res++;
//             count(x/2,y)
//         } else {
//             y = y-1;
//             count(1024,y)
//         }
//     }
// }
// count(1024,1024)
// console.log(res)


// function binary(n) {
//     if(n === 0) {
//         return "" ;
//     } else {
//         return binary(Math.floor(n/2)) + String(n%2)
//     }
// }

// console.log(binary(128))

// console.log(a)
// let a;



