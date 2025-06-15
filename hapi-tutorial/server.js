'user strict';

import Hapi from '@hapi/hapi';
import hapiGeolocate from 'hapi-geo-locate';
import utilityRoutes from './src/utils/utilityRoutes.js';
import userRoutes from './src/users/userRoutes.js';
import carRoutes from './src/cars/carRoutes.js';
import { geoRoute } from './src/geo-locate/geoLocateRoutes.js';

const { homePageRoute, wildCardRoute } = utilityRoutes;

const init = async () => {

    const server = Hapi.Server({
        host: 'localhost',
        port: 1234
    });

    await server.register({
        plugin: hapiGeolocate,
        options: {
            enabledByDefault: false
        }
    });

    server.route(homePageRoute);
    server.route(wildCardRoute);
    server.route(userRoutes);
    server.route(carRoutes);
    server.route(geoRoute);


    await server.start();
    console.log(`Started a Hapi HTTP server on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();