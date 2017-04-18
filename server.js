var http = require('http');

var server = new http.Server();

server.listen(4200, '127.0.0.1');

// //подивитись, які події емітую сервер
// var emit = server.emit;
// server.emit = function(event) {
//   console.log(event);
//   emit.apply(server,arguments)
// };

server.on('request', function(req, res) {
  console.log(res);
  res.end(res);
});
