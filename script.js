const message = document.querySelector("#message");
const analyzeButton = document.querySelector("#analyzeButton");
const result = document.querySelector("#result");

analyzeButton.addEventListener("click", async () => {
  const text = message.value.trim();

  if (text === "") {
    result.innerHTML = "<p>Digite uma mensagem para analisar.</p>";
    return;
  }

  result.innerHTML = "<p>🤖 Analisando mensagem...</p>";

  try {
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:3000/analyze"
        : "/api/analyze";

    const response = await fetch(apiUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: text,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro ao analisar mensagem.");
    }

    const analysis = data.result;

    // Extrai as informações retornadas pela IA
    const category =
      analysis.match(/Categoria:\s*(.*)/i)?.[1] || "Não identificada";
    const priority =
      analysis.match(/Prioridade:\s*(.*)/i)?.[1] || "Não identificada";
    const summary = analysis.match(/Resumo:\s*(.*)/i)?.[1] || "Não disponível";
    const suggestedResponse =
      analysis.match(/Resposta sugerida:\s*([\s\S]*)/i)?.[1] ||
      "Não disponível";

    // Define cor e emoji da prioridade
    const priorityText = priority.toLowerCase();

    let priorityClass = "priority-medium";
    let priorityEmoji = "🟡";

    if (priorityText.includes("alta")) {
      priorityClass = "priority-high";
      priorityEmoji = "🔴";
    }

    if (priorityText.includes("baixa")) {
      priorityClass = "priority-low";
      priorityEmoji = "🟢";
    }

    result.innerHTML = `
            <h2>🤖 Análise</h2>

            <p>
                🏷️ <strong>Categoria</strong><br>
                <span class="category">${category}</span>
            </p>

            <br>

            <p>
                ⚡ <strong>Prioridade</strong><br>
                <span class="priority ${priorityClass}">
                    ${priorityEmoji} ${priority}
                </span>
            </p>

            <br>

            <p>
                📝 <strong>Resumo</strong><br>
                ${summary}
            </p>

            <br>

            <p>
                💬 <strong>Resposta sugerida</strong><br>
                ${suggestedResponse}
            </p>
        `;
  } catch (error) {
    console.error(error);

    result.innerHTML = `
            <p>❌ Ocorreu um erro ao analisar a mensagem.</p>
        `;
  }
});
