/*write a js function that returns true , if the provided
predicate function  returns true for all elements in a collection
, false otherwise */

const isEveryValue = (arr,fn)=>{
    for(let i=0;i<arr.length;i++){
      if(!fn(arr[i])){
          return false;
      }
    }
    return true;
};

console.log(isEveryValue([1,2,3,4,5],(x) => x >2));
console.log(isEveryValue([1,2,3,4,5],(x) => x >0 ));





