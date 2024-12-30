const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0",
      description: "API documentation for Task management system",
    },
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
