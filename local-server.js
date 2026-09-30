const { GoogleGenAI } = require("@google/genai");
const http = require("http");
const fs = require("fs");

require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const server = http.createServer(async (req, res) => {

    // Página principal
    if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao carregar a página.");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(data);
        });

        return;
    }

    // CSS
    if (req.method === "GET" && req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("CSS não encontrado.");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });

        return;
    }

    // JavaScript
    if (req.method === "GET" && req.url === "/script.js") {
        fs.readFile("script.js", (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("JavaScript não encontrado.");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "application/javascript"
            });

            res.end(data);
        });

        return;
    }

    // Análise com Gemini
    if (req.method === "POST" && req.url === "/analyze") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {

            try {
                const { message } = JSON.parse(body);

                const response = await ai.models.generateContent({
                    model: "gemini-3.5-flash-lite",
                    contents: `
Analise a mensagem de um cliente.

Retorne exatamente neste formato:

Categoria: [categoria]
Prioridade: [baixa, média ou alta]
Resumo: [resumo curto]
Resposta sugerida: [resposta profissional]

Mensagem do cliente:
${message}
`
                });

                res.writeHead(200, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    result: response.text
                }));

            } catch (error) {

                console.error(error);

                res.writeHead(500, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "Erro ao analisar a mensagem."
                }));
            }
        });

        return;
    }

    res.writeHead(404);
    res.end("Not Found");
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});