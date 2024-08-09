//import package/library express
const express = require('express');

// initialization application expressJS
const app = express();

const PORT = 4200;

// parsing json body
const { UserController } = require('./controllers/user.controller');

app.use(express.json({limit: '50mb'}));

//parsing URL encoded dtaa
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
}));

const userController = new UserController(app)
userController.boot()

//SIMPLE ROUTING
/**
 * Req adalah request
 * Res adalah response
 */
// app.get('/', (req, res) => {
//     return res.status(200).send ("Hello, World");

// });

// app.post('/', (req, res) => {
//     return res.status(201).send("Ini adalah HTTP method POST");
// })

// app.put('/', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP method PUT");
// })

// app.delete('/', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP method DELETE");
// })

// app.listen( PORT, () => {
//     console.log(`server is running in http://localhost:${PORT}`);
// })

// app.get('/get', (req, res) => {
//     return res.status(200).send ("Miaw, Miaw");

// });

// app.post('/post', (req, res) => {
//     return res.status(201).send("Ini adalah HTTP method POST");
// })

// app.get('/:id', (req, res) => {
//     return res.status(200).send (`Miaw, Miaw from ${req.params.id}`);

// });

// app.put('/put', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP method PUT");
// })

// app.delete('/del', (req, res) => {
//     return res.status(200).send("Ini adalah HTTP method DELETE");
// })


app.listen( PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
})