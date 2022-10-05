const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Simple API for first and last name, email, birthday, and favorite color',
  },
  host: ('localhost:8080', 'contacts-api-p0v8.onrender.com', 'cse341-contacts-frontend.netlify.app'),
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);

// $ npm install --save-dev swagger-autogen
// https://www.npmjs.com/package/swagger-autogen
// https://www.npmjs.com/package/swagger-ui-express