import escapeHtml from "../utils/functions/escapeHtml.js";

export const greetUser = (request, h) => {
    const rawUserName = request.params.username;
    const userName = rawUserName ? escapeHtml(rawUserName) : null;

    const greeting = userName
        ? `<h1>Hello ${userName}!</h1>`
        : `<h1>Hello Unidentified Person!</h1>`;

    return h.response(greeting)
        .type('text/html')
        .code(200);
}

export const farewellUser = (request, h) => {
    const rawUserName = request.params.username;
    const userName = rawUserName ? escapeHtml(rawUserName) : null;

    const greeting = userName
        ? `<h1>It was a pleasure to meet you, ${userName}!</h1>`
        : `<h1>Bye bye Unidentified Person!</h1>`;

    return h.response(greeting)
        .type('text/html')
        .code(200);
}
