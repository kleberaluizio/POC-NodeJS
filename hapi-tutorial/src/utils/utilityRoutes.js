const homePageRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return "<h1>Starting a Hapi HTTP server!</h1>";
    }
};

const wildCardRoute = {
    method: 'GET',
    path: '/{any*}', // It can be anything, common practice to user the word any.
    handler: (request, h) => {
        return "<h1>Oh no, route not supported!</h1>";
    }
};

export default { homePageRoute, wildCardRoute };