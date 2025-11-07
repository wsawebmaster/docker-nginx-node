import * as fs from 'fs';

// fs.writeFile('arquivo.txt', 'Conteúdo do arquivo', (err) => {
//     if (err){
//         console.log('Erro ao criar o arquivo:', err);
//     }
//     console.log('Arquivo criado com sucesso!');
// });

// fs.appendFile('arquivo.txt', '\nAdicionado conteúdo', (err) => {
//     if (err){
//         console.log('Erro ao atualizar o arquivo:', err);
//     }
//     console.log('Arquivo atualizado com sucesso!');
// });

// fs.readFile('arquivo.txt', (err, data) => {
//     if (err){
//         console.log('Erro ao tentar ler o arquivo:', err);
//     }
//     console.log(data.toString());
// });

let data = fs.readFileSync('arquivo.txt');
console.log(data.toString());