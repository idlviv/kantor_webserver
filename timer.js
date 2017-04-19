var http = require('http');

var server = new http.Server(function(req, res) {

}).listen(4200);

setTimeout(function() {
  server.close();
}, 2500);

var timer = setInterval(function() {
  console.log(process.memoryUsage());
}, 1000);

// вказує, що для закриття сервера на цей таймер не потрібно чекати
// як тільки не залишиться інших вотчерів (крім цього) сервер закриється
// .unref() є не тільки в таймерів
timer.unref(); // timer.ref(); - протилежний