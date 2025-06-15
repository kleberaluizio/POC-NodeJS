export const geoRoute = {
    method: 'GET',
    path: '/location',
    handler: (request, h) => {
        if (request.location) {
            return request.location;
        }
        return '<h1>Your location is not enabled by default!</h1>'
    }
}