const http = require("http");
const fs = require("fs")
const envfile = require("./env/env.js");
const express = require("express");
const app = express();

const middleware = require("./middleware/main.js")
const host = envfile.host;
const port = envfile.port;

app.use(middleware)

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
})