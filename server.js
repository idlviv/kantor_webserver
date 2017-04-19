var http = require('http');
var url = require('url');

var server = new http.Server();

server.listen(4200, '127.0.0.1');

// //подивитись, які події емітую сервер
// var emit = server.emit;
// server.emit = function(event) {
//   console.log(event);
//   emit.apply(server,arguments)
// };

server.on('request', function(req, res) {
  var urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname = '/echo' && urlParsed.query.message) {
    // res.writeHead(200, 'OK', {'Cache-control': 'no-cache'}); // записує заголовок зразу
    res.setHeader('Cache-control', 'no-cache'); // записує заголовок при першій передачі даних (тут в res.end)
    res.end (urlParsed.query.message)
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});
