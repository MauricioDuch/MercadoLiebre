const express = require("Express");
const server = express();
const port = process.env.PORT || 3030;
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

server.get("/register", function(req, res){
    let file2 = path.join(__dirname,"views","register.html");
    res.sendFile(file2)
});

server.get("/login", function(req, res){
    let file3 = path.join(__dirname,"views","login.html");
    res.sendFile(file3)
});



