let array = [1,2,3,4,5];

let result = (arr) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum+arr[i]
    }
    return sum;
}


console.log(result(array));





let ans = array.reduce((sum,arr)=>{
    return sum = sum + arr
},0)


console.log(ans);