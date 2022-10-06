const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    // #swagger.description 
    description: 'Simple API for first and last name, email, birthday, and favorite color',
  },
  host: (''),
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);

// $ npm install --save-dev swagger-autogen
// https://www.npmjs.com/package/swagger-autogen
// https://www.npmjs.com/package/swagger-ui-express