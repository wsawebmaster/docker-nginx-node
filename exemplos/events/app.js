import EventEmitter from 'events';

// var emitter = new EventEmitter();

// emitter.on('meu_evento', () => {
//     console.log(`Meu evento foi acionado!`);
// });

// emitter.emit('meu_evento');

class Cao extends EventEmitter {
    latir() {
        console.log('Latindo...');
    }
}

const rex = new Cao();

rex.on('pessoa_no_portao', rex.latir); //rex.once para executar apenas uma vez

rex.emit('pessoa_no_portao');
rex.emit('pessoa_no_portao');