require("dotenv").config();

const host = process.env.HOST;
const port = process.env.PORT;
const secret_key = process.env.SECRET_KEY
/*For testing purposes
console.log(process.env.PORT)
console.log(process.env.HOST)
console.log(`The app runs on: ${host}:${port}`);
*/

module.exports =  { host, port, secret_key }
