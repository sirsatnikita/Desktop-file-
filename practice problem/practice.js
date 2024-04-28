// 1. sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.

// function array(num){
//    let sum=0;
//    sum= num.reduce((acc,cur)=>acc+cur,0);
//    return sum;

// }
// result=array([1,3,5,6,7]);
// console.log(result);


//2 .Write a function to calculate the average of all elements in an array of integers.

// function average(arr){
//       if (arr.length ===0){
//          return  0;
//       }
//       let sum= arr.reduce((acc,cur)=>acc+cur,0);
//       return sum/arr.length;
//    }
//    let number= [2,4,5,6];
//    console.log(average(number));

// 3.  Write a function to find the maximum element in an array of integers.

// function maximum(arr){
//    let max=arr[0];
//    for (let i=1; i<arr.length;i++){
//       if (arr[i]>max){
//          max=arr[i];
//       }
      
//    }
//    return max;
// }
// let result = maximum([3, 6, 7, 4, 8]);
// console.log(result);

// 4. Write a function to find the minimum element in an array of integers.

// function minimum(arr){
//       let min=arr[0];
//       for (let i=1; i<arr.length;i++){
//          if (arr[i]<min){
//             min=arr[i];
//          }
         
//       }
//       return min;
//    }
//    let result = minimum([3, 6, 7, 4, 8]);
//    console.log(result);

//5.Write a function to search for a given element in an array and return its index if found, otherwise return -1.

// function array(arr,num){
//    if (arr.includes(num)){
//       return arr.indexOf(num);
//    }
//    else{
//       return -1;
//    }
// }
// let output= array([5,4,7,8],8);
// console.log(output);

//6 . Write a function to sort an array of integers in non-decreasing order (ascending).

// function array(arr){
//    arr.sort((a,b)=> a-b);
//    return arr;
// }
// output = array([3,2,1,5,7,]);
// console.log(output);

//7. Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.)
// function evenNumber(arr){
//    let num = arr.filter(number=>number%2==0);
//    return num;
// }
