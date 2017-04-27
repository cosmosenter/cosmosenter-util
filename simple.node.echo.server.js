/**
 * simple echo node js server
 */

var net = require("net");
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder("utf-8");
var clients = [];

var server = net.createServer(function(socket){
    console.log("create");
    clients.push(socket);
    socket.on("data", function(data){
        console.log(data);
        socket.write(data);
    });
    socket.on("end", function(){
        clients.splice(clients.indexOf(socket), 1);
        console.log("close");
    });
});

server.listen(13371, "0.0.0.0");

