import describeCar from "./carHandler.js";

const carRoutes = [
    {
        method: 'GET',
        path: '/cars', // http://localhost:1234/cars?model=mercedes
        handler: describeCar
    }
];

export default carRoutes;