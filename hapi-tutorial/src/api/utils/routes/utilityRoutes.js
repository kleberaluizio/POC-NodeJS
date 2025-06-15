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

const dinoRoute = {
    method: 'GET',
    path: '/dino', 
    handler: (request, h) => {
        return h.file(Path.resolve('src/resources/dino.html'));
    }
};

const blogRoute = {
    method: 'GET',
    path: '/blog', 
    handler: (request, h) => {
        return h.file('blog.html');
    },
    options: {
        files: {
            relativeTo: Path.resolve('src/resources')
        }
    }
};

export default { homePageRoute, wildCardRoute, dinoRoute, blogRoute };