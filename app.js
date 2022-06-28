const express = require("Express");
const server = express();
const port =3030;
const start = () => console.log("Server On...");
server.listen(port, start());
//server

//direccionamiento
const path = require("path")
const public = path.join(__dirname, "public");
const statics = express.static(public)

server.use(statics)

server.get("/", function(req, res){
    let file = path.join(__dirname,"views", "home.html");
    res.sendFile(file)
});

