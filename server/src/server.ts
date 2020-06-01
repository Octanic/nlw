import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    
    console.log("xxxx");
    
    response.json([
        'João',
        'Teste',
        'cleiton'
    ])

});

app.listen(3333);