const Http = require('http');

const { NODE_PORT, TEST_MSG } = process.env;

const server = Http.createServer((req, res) => {
  const body = TEST_MSG || 'ok';

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });

  res.end(body);
});

server.listen(NODE_PORT || 3000, () => {
    console.log('Server listening... (I\'m useless though.)');
});
