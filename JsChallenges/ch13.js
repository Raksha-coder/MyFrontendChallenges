/*
Write a js program to replace every 
characters in a given string with the character 
following it in alphabet
 */

const moveCharsForward = (str)=>
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+ 1))
    .join('');

console.log(moveCharsForward("abcd"));
