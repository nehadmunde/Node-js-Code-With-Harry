const fs=require('fs');

fs.readFile('file.txt',"utf8",(err,data)=>{
    console.log(err,data);
})
console.log('fininshed reading file');

fs.writeFile('file1.txt','This is file1.txt',()=>{
    console.log('Written to the file');
})
console.log('fininshed reading file');
