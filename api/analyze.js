const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método não permitido."
        });
    }

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Mensagem não informada."
            });
        }

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

        return res.status(200).json({
            result: response.text
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Erro ao analisar a mensagem."
        });
    }
};