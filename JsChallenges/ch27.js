/*
write a js program to compare two objects 
to determine if the first one contains the
same properties as the second one (which may also 
have additional properties).
*/

const obj1 = {a:1,b:2,c:1};
const obj2 = {a:1,b:1,c:1};
const obj3 = {a:1,b:5,e:1};

const equalObject = (obj1,obj2) => Object.keys(obj1).every(prop => obj2[prop]);
console.log(equalObject(obj1,obj2));
console.log(equalObject(obj1,obj3));


