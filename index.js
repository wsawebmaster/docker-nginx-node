import http from 'http'; 

const HOST = '0.0.0.0'; 
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })

    if (req.url === '/') {
        res.write('<h1>Node e Nginx no Docker em execução.</h1>')
        res.end()
    } else if (req.url === '/sobre') {
        res.write('<h1>Página Sobre</h1>')
        res.end()
    } else {
        res.write('<h1>404 Nout Found</h1>')
        res.end()
    }
})

server.listen(PORT, HOST, () => {
    console.log(`Server running successfully on http://${server.address().address}:${server.address().port}`)
})