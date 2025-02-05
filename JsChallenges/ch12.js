/*
Write a Js program to get the extension of a filename.
*/
const extension = (filename) =>{
  if (filename) {
    let file = filename.split('.');
    return file[file.length-1];
  }else{
    return '';
  }
}
console.log(extension(''));
