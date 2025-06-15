import escapeHtml from "../utils/functions/escapeHtml.js";

const describeCar = (request, h) => { //h = ResponseToolik
    let { model, color } = request.query;
    console.log(request.query)

    model = model ? escapeHtml(model) : null;
    color = color ? escapeHtml(color) : null;

    let message;
    if (!model) {
        message = `<h1>I have no car, I'm kind of a bike person!</h1>`;
    }

    if (!color) {
        message = `<h1>I have a car, it's a ${model}!</h1>`
    }

    message = `<h1>I have a car, it's a ${color} ${model}!</h1>`

    return h.response(message)
        .type('text/html')
        .code(200);
};

export default describeCar;