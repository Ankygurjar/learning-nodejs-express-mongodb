const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));


const Port = 3000;
app.listen(Port,()=>{
  console.log(`Server is started at ${Port}`);
});
