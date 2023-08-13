import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
//import finalhandler from "finalhandler";
//import  http  from "http";
import fs from "fs"
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

