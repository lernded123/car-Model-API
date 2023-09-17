const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const sportsCars = {
    'bmw-m4': { 
    'curbWeight' : 3990,
    'horsePower': 473, 
    'engineSize': 6,
    'revMax': 6000 
    },
    'porshe-911-gt3': {
    'curbWeight': 3200, 
    'horsePower': 502, 
    'engineSize': 6,
    'revMax': 9000
    },
    'unknown': {
    'curbWeight' : 0,
    'horsePower': 'unknown',
    'engineSize': 'unknown',
    'revMax': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const carModel = request.params.name.toLowerCase();
    console.log(sportsCars[carModel]);
    if(sportsCars[carModel]){
        response.json(sportsCars[carModel])
    } else{
        response.json(sportsCars['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`);
})