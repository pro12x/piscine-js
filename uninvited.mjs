/*
    When you started to organize the party you thought it would be easier. Your friend who started helping on the last exercise, raised a question that you didn't think about before. What would happen if people showed up with a plus-one? Or a plus-three?

    Oh no! You didn't take into account people uninvited who might come with your guests.

    For now, what your friend suggested is to call the guests and try to find out who would come with company.

    Create an uninvited.mjs program that will open a server to remotely not just access, but also update the list. It will need to handle http POST requests to add new guests.

    Here below are your program/server's expected behaviors:

    It has to listen on port 5000 and it will have to print a simple message on the console, specifying the listening port.
    Its HTTP response should contain a coherent status code depending on the handling of the received HTTP request. More specifically, your server should be able to respond with the following status codes: 201 and 500.
    The responses will always be JSON and this information should be explicit in the HTTP response.
    For each http POST request, your program should create the corresponding JSON file and store the contents of the body, and then provide the content as JSON in the HTTP response, if possible. If the file already exists, it should replace it.
    If for any reason the server fails, the response should be an object with a key error and its value server failed.
    Example
    To test your program, you should be able to expect the following behaviour once your program is up and running.

    curl -X POST localhost:5000/Ronaldinho -H "Content-Type: application/json" -d '{"answer": "yes", "drink": "guarana", "food": "chicken stroganoff"}'
    {
      "answer": "yes",
      "drink": "guarana",
      "food": "chicken stroganoff"
    }
 */

import * as http from 'node:http'
import * as fs from 'node:fs';

const port = 5000;

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const guest = req.url.slice(1, req.url.length)
                const filename = './guests/' + guest + '.json';
                fs.writeFile(filename, body, (err) => {
                    if (err) {
                        // If there was an error writing the file
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        body = { error: "server failed" }
                        res.end(JSON.stringify(body));
                    } else {
                        // If the file was successfully written
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(body);
                    }
                });
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                body = { error: "server failed" }
                res.end(JSON.stringify(body));
            }
        });
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});