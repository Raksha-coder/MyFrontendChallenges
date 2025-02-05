/*
check whether a given array of integer is sorted 
in ascending order.
*/

const isAscending = (arr) => {
      for(let i=0;i<arr.length;i++){
        if(arr[i+1] < arr[i]) return false;
      }
      return true;
}

if(isAscending([9,2,6,4,5])){
    console.log("The given array is sorted");
}else{
  console.log("The given array is not sorted");
}