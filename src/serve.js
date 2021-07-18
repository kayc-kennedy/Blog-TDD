const express = require('express');
const app = express();

app.use('/', require('./routes/postsRouter'));

app.listen(3000, ()=>{
    console.log('Serve running at port 3000')
})