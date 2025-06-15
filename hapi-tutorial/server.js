'user strict';

import Hapi from '@hapi/hapi';

import utilityRoutes from './src/api/utils/routes/utilityRoutes.js';
import userRoutes from './src/api/users/userRoutes.js';
import carRoutes from './src/api/cars/carRoutes.js';
import { geoRoute } from './src/api/geo-locate/geoLocateRoutes.js';

import plugins from './src/api/utils/plugins/plugins.js'

const { homePageRoute, wildCardRoute, dinoRoute, blogRoute } = utilityRoutes;

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 1234
    });

    await server.register(plugins);

    server.route(homePageRoute);
    server.route(dinoRoute);
    server.route(blogRoute);
    server.route(userRoutes);
    server.route(carRoutes);
    server.route(geoRoute);
    server.route(wildCardRoute);

    await server.start();
    console.log(`Started a Hapi HTTP server on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();