var fs = require('fs');

fs.open(__filename, "r", function(err, data) {
  console.log('io');
});

//асинхронно, виконаэться при наступному колі запросів
setImmediate(function() {
  console.log('immediate');
});

//асинхронно, виконаэться першим при наступному колі запросів
process.nextTick(function() {
  console.log('nextTick');
});