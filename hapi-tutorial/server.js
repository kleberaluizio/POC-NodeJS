'user strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 1234
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "<h1>Starting a Hapi HTTP server!</h1>";
        }
    });

    server.route({
        method: 'GET',
        path: '/users/{userName?}',
        handler: (request, h) => {
            return request.params.userName?
            `<h1>Hello ${request.params.userName}!</h1>` :
            `<h1>Hello Unidentified Person!</h1>`
        }
    });
    await server.start();
    console.log(`Started a Hapi HTTP server on: ${server.info.uri}`);
    
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();