import Path from 'path';

const homePageRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.file(Path.resolve('src/resources/httpserver.html'))
    }
};

const wildCardRoute = {
    method: 'GET',
    path: '/{any*}', // It can be anything, common practice to user the word any.
    handler: (request, h) => {
        return h.file(Path.resolve('src/resources/wildcard.html'));
    }
};

export default { homePageRoute, wildCardRoute };