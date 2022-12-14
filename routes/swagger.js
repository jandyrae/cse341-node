const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));