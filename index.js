const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const email = require('./routes/email')



//Segun la computadora
const process = require('process')

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;



const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/send-email',email)

app.listen(3001, () => {
    console.log("Server corriendo en puerto " + 3001);
});