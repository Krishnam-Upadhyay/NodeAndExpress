const http = require('http');
const fs = require('fs');
/* const url = require('url');
const replaceHtml = require('./Modules/replaceHtml');
const evetns = require('events');



//reading html file for response
const html= fs.readFileSync('./Template/index.html','utf-8');
const products = JSON.parse(fs.readFileSync('./Data/products.json','utf-8'));
const productListHtml = fs.readFileSync('./Template/productsList.html','utf-8');
const producDetailsHtml = fs.readFileSync('./Template/product-detail.html','utf-8');


 */

//create a server
const server = http.createServer((req,res)=>{
   /* let {query,pathname:path}= url.parse(req.url,true);
   

   
   if(path ==='/' || path.toLocaleLowerCase()==='/home'){
    res.writeHead(200);
    res.end(html.replace('{content}',productListHtml));
   }
   else if(path.toLocaleLowerCase()==='/about'){
    res.writeHead(200);
    res.end(html.replace('{content}','About'));
   }
   else if(path.toLocaleLowerCase()==='/contact'){
    res.writeHead(201);
    res.end(html.replace('{content}','contact'));
   }
   else if(path.toLocaleLowerCase() ==='/products'){
    if(!query.id){
    res.writeHead(200,{
        'Content-type':'text/html'
    });
    let productContentArray= products.map((prod)=>{
       return replaceHtml(productListHtml,prod);

    })
    res.end(html.replace("{content}",productContentArray.join(",")));
}
    else{
        let prod = products[query.id];
        
        let productDetailsResponseHtml =replaceHtml(producDetailsHtml,prod);
        res.end(html.replace('{content}',productDetailsResponseHtml));
    }
    
    
   }
   else{
    res.writeHead(404);
    res.end(html.replace('{content}','Page Not Found'));
   }
    
 */

  //*******************************************************************************************************
  
  
 
});
server.on('request',(req,res)=>{
   const r1 =  fs.createReadStream('./Files/largeFile.txt');
   r1.pipe(res);
  
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started');

})

