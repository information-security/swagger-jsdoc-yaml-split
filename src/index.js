import http from 'http';
import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import config from './config/docs.config.js';
import apiRouter from './routes/api.js';

/* Set this variable to false to see that it can only load the info and servers from constructor */
const loadFromYaml = true;

const expressApp = express();

const swaggerDefinition = {
	openapi : '3.0.0'
};
const options = {
	definition : loadFromYaml ? swaggerDefinition : config.swaggerDefinition,
	apis       : [ `./src/routes/**/*.js`, `./src/docs/*.yaml` ] // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc.default(options);
const swaggerUiOptions = {
	explorer : true
};

expressApp.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUiOptions));
expressApp.use(apiRouter);

const httpServer = http.createServer(options, expressApp);

httpServer.listen(3000, 0, () => console.log('Server started successfully'));