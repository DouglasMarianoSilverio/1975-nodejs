'use strict'


const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
//sempre que for importar com algo da aplicação começar com ./ no require ex: ('./meu arquivo')

//vamos usar mvc ;)
const app = express();
const port = 3000;
app.set('port',port);

const server = http.createServer(app);
const router = express.Router();
//rota padrão
const route = router.get('/', (req,res,netx) =>{
     res.status(200).send({
         title: "Node Store API",
         version: "0.0.1"
     })
}) ;

app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);