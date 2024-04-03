/*
    The workload to organize this party is becoming too much to be handled by a single person. It is time to let a friend support you.

    Create a friend-support.mjs program that will open a server to remotely access the guest list stored on your computer. Your program will need to handle HTTP GET requests.

    Here below the description of the expected behaviors of your program:

    It has to listen on port 5000, and it will have to print a simple message on the console as soon as it starts, specifying the listening port;
    Its HTTP response should always contain a coherent status code depending on the handling of the received HTTP request. More specifically, your server should be able to respond with the following status codes: 200, 404 and 500;
    The responses will always be JSON and this information should be included in the HTTP response;
    For each HTTP request, your program should try to open the corresponding guest JSON file and provide the content as JSON in the HTTP response, if possible. When the guess specified in the request is not found, the server should return an object with the attribute error defined as guest not found;
    If for any reason the server fails, the response should be an object with an attribute error specified as server failed.
    Example
    To test your program, you should be able to expect the following behavior once your program is up and running.

    curl localhost:5000/Elis_Galindo
    {
      "answer": "no",
      "drink": "soft",
      "food": "veggie"
    }
 */

import * as http from 'node:http';
import { readFile } from 'fs';
import { readdir } from 'node:fs/promises';

const server = http.createServer(async function (req, res) {
    if (req.method === 'GET') {
        let name = req.url.slice(1, req.url.length);
        try {
            const files = await readdir('./guests/');
            if (files.indexOf(name + '.json') === -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                const body = { error: "guest not found" };
                res.end(JSON.stringify(body));
            } else {
                const fileContent = await readFileAsync(`./guests/${name}.json`);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(fileContent);
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            const body = { error: "server failed" };
            res.end(JSON.stringify(body));
        }
    }
});

server.listen(5000, () => console.log(`The server is listening on port 5000`));

async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
