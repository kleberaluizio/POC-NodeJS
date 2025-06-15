import { greetUser, farewellUser } from './userHandler.js';

const userRoutes = [
    {
        method: 'GET',
        path: '/users-greeting/{username?}',
        handler: greetUser
    },
    {
        method: 'GET',
        path: '/users-farewell/{username?}',
        handler: farewellUser
    }
];

export default userRoutes;