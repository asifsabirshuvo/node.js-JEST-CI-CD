const axios = require('axios');
const express = require('express');
const app = express();

function createUser() {
    let user = {
        firstName: 'asif',
        age: 33
    };
    return user;
}


async function getData() {
    let info = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return info.data;
}

function getUsers() {
    let users = [{
        firstName: 'asif',
        age: 33
    }, {
        firstName: 'asif',
        age: 33
    }];
    return users;
}

app.get('/', async(req, res) => {
    let info = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.json(info.data);
});


app.listen(3000, () => {
    console.log('server running on PORT: 3000');
});

module.exports = { createUser, getUsers, getData };