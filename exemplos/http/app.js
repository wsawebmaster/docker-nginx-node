import * as http from 'http';

// const server = http.createServer((req, res) => {
//     res.writeHead('200', {'Content-Type': 'text/html'});
//     res.write('<h1>Hello World!</h1>');
//     res.end();
// });

const server = http.createServer((req, res) => {
    res.writeHead('200', {'Content-Type': 'text/html'});
    var url = req.url;
    if(url === '/home') {
        res.write('<h1>Você está na página Home</h1>');
        res.end();
    }else if(url === '/sobre') {
        res.write('<h1>Você está na página Sobre</h1>');
        res.end();
    }else if(url === '/contato') {
        res.write('<h1>Você está na página Contato</h1>');
        res.end();
    }else {
        res.write('<h1>Erro 404 - Página não encontrada!</h1>');
        res.end();
    }
});



const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});