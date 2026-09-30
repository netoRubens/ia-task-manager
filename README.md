🤖 IA Task Manager

Aplicação web que utiliza Inteligência Artificial para analisar mensagens de clientes, identificando automaticamente a categoria, prioridade, resumo e sugerindo uma resposta profissional.

O projeto foi desenvolvido como uma aplicação prática envolvendo JavaScript, Node.js, integração com IA e deploy em produção.

✨ Funcionalidades

* 🤖 Análise de mensagens utilizando IA
* 🏷️ Identificação automática da categoria
* 🚨 Classificação de prioridade
* 📝 Geração de resumo da mensagem
* 💬 Sugestão de resposta profissional
* 🎨 Interface moderna e responsiva
* ⚡ Processamento através de uma API
* 🔐 Chave da API protegida por variável de ambiente
* ☁️ Deploy realizado na Vercel

🛠️ Tecnologias utilizadas
Front-end
HTML5
CSS3
JavaScript
DOM API
Fetch API
Back-end
Node.js
API Routes
Google Gemini API
@google/genai
Ferramentas
Git
GitHub
Visual Studio Code
Vercel
npm

🧠 Como funciona

O fluxo da aplicação é simples:

Mensagem do usuário
        ↓
Interface Web
        ↓
API /api/analyze
        ↓
Google Gemini
        ↓
Análise da mensagem
        ↓
Categoria + Prioridade + Resumo + Resposta
        ↓
Exibição na interface

O usuário envia uma mensagem através da interface. O front-end envia os dados para a API, que utiliza o Gemini para processar o conteúdo e retorna a análise estruturada para a aplicação.

🎯 Objetivo do projeto

O projeto foi desenvolvido com o objetivo de praticar conceitos de:

Desenvolvimento web
JavaScript
Manipulação do DOM
Requisições HTTP
Desenvolvimento de APIs
Integração com serviços de Inteligência Artificial
Variáveis de ambiente
Git e GitHub
Deploy de aplicações
Integração entre front-end e back-end

Além do aspecto técnico, o projeto demonstra uma aplicação prática de IA para automação e organização do atendimento ao cliente.
