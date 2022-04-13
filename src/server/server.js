const express = require('express');
const api = require('./api.js');
var cors = require ('cors')

const app = express();
const port = 9000;

app.use(cors()) 
app.use(express.json())

app.use('/api', api)
// app.post('/savefaves/:id', appApi)
// app.get('/faves', appApi)
// app.put('/update/:id', appApi)
// app.delete('/delete/:id', appApi)

app.listen(port, function(){
    console.log(`SWAPI Server listening at http://localhost:${port}`)
})