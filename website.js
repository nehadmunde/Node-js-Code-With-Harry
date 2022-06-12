
const http=require('http');
const port =process.env.PORT || 3000;
const server=http.createServer((req,res)=>{
   res.statusCode=200;
   res.setHeader('Content-Type','text/html')  
   console.log(req.url);

   if(req.url=='/'){
    res.statusCode=200;
    res.end('<h1>This is code with Neha</h1> <p>Hey this is node js Tutorial.</p>')
   }
   else if(req.url=='/about'){
    res.statusCode=200;
    res.end('<h1>About Us code with Neha</h1> <p>Hey this is node js Tutorial.</p>')
   }
   else{
       res.statusCode=404;
       res.end('<h1>This is page not found on server</h1> <p>Hey this page is not found.</p>')
   }
})  

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
