const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const app = express();
const port = process.env.PORT || 3000;
const expressSwagger = require('express-swagger-generator')(app);// We import expressSwagger that we installed

//Here we configure swagger. We will be able to access it on /api-docs
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is the version 2 of our User API',
            title: 'User API',
            version: '2.0.0',
        },
        host: `localhost:${port}`, //We specify the port where the app is running
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "JWT authorization token",
            }
        }
    },
    basedir: __dirname, 
    files: ['./routes/user.js'] //We specify the routes to the docs where we do REST API requests, here user.js
};

expressSwagger(options);//Options of swagger

const db = require('./dbClient');
db.on("error", (err) => {
  console.error(err);
});

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Welcome route
app.get('/', (req, res) => res.send('Hello World'));

// User routes
app.use('/user', userRouter);

// Start server
const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
