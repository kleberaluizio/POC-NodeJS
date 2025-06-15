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
    options: { // Outra forma de especificar o caminho
        files: {
            relativeTo: Path.resolve('src/resources')
        }
    }
};

const downloadRoute = {
    method: 'GET',
    path: '/download', 
    handler: (request, h) => { // Exemplo para realizar o download de arquivos estáticos
        return h.file(Path.resolve('src/resources/dino.html'), {
            mode: 'attachment',
            fileName: 'dino-download.html'
        });
    }
};

export default { homePageRoute, wildCardRoute, dinoRoute, blogRoute, downloadRoute };