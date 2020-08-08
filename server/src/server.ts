import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Fulano', age: 31},
        { name: 'Beltrano', age: 28}
    ];

    return response.json([users]);
});

app.listen(3333);