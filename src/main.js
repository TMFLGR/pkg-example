// track start time
const startTime = new Date().getTime();

// import modules
const path = require('path')
const arg = require('arg');
const express = require('express');

// parse cli arguments
const args = arg({"--port": Number, "--p": "--port"});
const port = args["--port"] || 3000

// init express server
const server = express();
server.disable('x-powered-by');

// get the relevant paths
const cwd = __dirname;
const publicFolder = path.resolve(cwd, 'public');
const indexFile = path.resolve(publicFolder, 'index.html');

// serve static content
server.use(express.static(publicFolder));
// simple health endpoint for health checks
server.all('/health', (_, res) => res.status(200).end('up'));
// in case of misbehaviour we can shutdown the server using this endpoint
server.all('/shutdown', (_, res) => res.status(200).end('bye') && process.exit(0));
// answer every other request with index.html
server.all('*', (_, res) => res.status(200).sendFile(indexFile));
// start server and listen on port x
server.listen(port);
process.stdout.write(`[INFO] server listing on port ${port}\n`)
process.stdout.write(`[INFO] startup completed in ${Date.now() - startTime}ms\n`)