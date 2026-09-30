🤖 IA Task Manager

Aplicação web que utiliza **Inteligência Artificial para analisar mensagens de clientes**, identificando automaticamente a categoria, prioridade, resumo e sugerindo uma resposta profissional.

O projeto foi desenvolvido como uma aplicação prática envolvendo **JavaScript, Node.js, integração com IA e deploy em produção**.

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

📂 Estrutura do projeto
ia-task-manager/
│
├── api/
│   └── analyze.js       # API responsável pela análise com IA
│
├── index.html            # Interface da aplicação
├── style.css             # Estilos da aplicação
├── script.js             # Lógica do front-end
├── local-server.js       # Servidor para execução local
├── package.json          # Dependências e configurações
├── package-lock.json
├── .gitignore
└── .env.example          # Exemplo das variáveis de ambiente
⚙️ Como executar localmente
1. Clone o repositório
git clone https://github.com/netoRubens/ia-task-manager.git
2. Entre na pasta
cd ia-task-manager
3. Instale as dependências
npm install
4. Configure a variável de ambiente

Crie um arquivo .env na raiz do projeto:

GEMINI_API_KEY=sua_chave_aqui

⚠️ Nunca publique sua chave da API no GitHub.

5. Execute o projeto
node local-server.js

Depois acesse:

http://localhost:3000

🔐 Variáveis de ambiente

O projeto utiliza a seguinte variável:

Variável	Descrição
GEMINI_API_KEY	Chave utilizada para acessar a API do Google Gemini

Em produção, a variável é configurada diretamente no ambiente da Vercel.

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
