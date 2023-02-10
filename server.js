
dotenv = require('dotenv');
dotenv.config({
    path:'./config.env'
})
const app = require('./app');
const port = process.env.PORT || 3000;





app.listen(port,()=>{
    console.log(`server started http://127.0.0.1:${process.env.PORT}`);
});
