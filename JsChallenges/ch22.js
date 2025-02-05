/*
write a js program to find the number of even 
values up to a given number
*/

const findEvenValues = (arr) => arr.filter(n => n%2 == 0).length;

const getTheArray = ((num)=>{
    let returnArray = [];
    for(let i=1;i<=num;i++){
        returnArray.push(i);
    }
    return returnArray;
});

console.log(findEvenValues(getTheArray(10)));
