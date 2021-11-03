const express = require('express'); 
const app = express(); 

app.get('/posts', (req, res) => {
    res.json( {name:'rania'} )
})

app.post('/')
app.listen(4000);