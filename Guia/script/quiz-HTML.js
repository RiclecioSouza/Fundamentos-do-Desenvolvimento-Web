const perguntas = [
    {
        categoria: "Introdução e estrutura HTML",
        pergunta: "1. Qual é a principal função do HTML?",
        alternativas: [
            "Criar animações e efeitos visuais",
            "Estruturar e organizar o conteúdo de uma página",
            "Armazenar informações em um banco de dados",
            "Definir exclusivamente as cores de uma página"
        ],
        respostaCorreta: 1,
        explicacao: "O HTML organiza o conteúdo e define a estrutura e o significado dos elementos de uma página."
    },
    {
        categoria: "Introdução e estrutura HTML",
        pergunta: "2. Qual elemento contém o conteúdo apresentado visualmente na página?",
        alternativas: [
            "<head>",
            "<meta>",
            "<body>",
            "<title>"
        ],
        respostaCorreta: 2,
        explicacao: "O elemento <body> contém o conteúdo da página, como títulos, parágrafos, imagens e links."
    },
    {
        categoria: "Títulos, parágrafos e ênfase",
        pergunta: "3. Qual elemento representa o título principal de uma página ou assunto?",
        alternativas: [
            "<p>",
            "<h1>",
            "<strong>",
            "<span>"
        ],
        respostaCorreta: 1,
        explicacao: "O <h1> representa o título principal. Os níveis seguintes, como <h2> e <h3>, organizam os subtópicos."
    },
    {
        categoria: "Títulos, parágrafos e ênfase",
        pergunta: "4. Qual é a finalidade do elemento <strong>?",
        alternativas: [
            "Criar uma quebra de linha",
            "Inserir uma imagem",
            "Indicar que um conteúdo possui importância",
            "Criar um link para outra página"
        ],
        respostaCorreta: 2,
        explicacao: "O <strong> indica importância ou relevância no conteúdo, não sendo apenas uma forma de deixar o texto em negrito."
    },
    {
        categoria: "Links e imagens",
        pergunta: "5. Qual atributo define o destino de um link criado com <a>?",
        alternativas: [
            "src",
            "alt",
            "href",
            "id"
        ],
        respostaCorreta: 2,
        explicacao: "O atributo href informa o endereço para o qual o link direciona o usuário."
    },
    {
        categoria: "Links e imagens",
        pergunta: "6. Qual é a função do atributo alt em uma imagem?",
        alternativas: [
            "Definir o tamanho da imagem",
            "Fornecer uma alternativa textual para a imagem",
            "Alterar a cor da imagem",
            "Criar um link para a imagem"
        ],
        respostaCorreta: 1,
        explicacao: "O atributo alt fornece uma descrição textual da informação transmitida pela imagem. Imagens decorativas podem usar alt vazio."
    },
    {
        categoria: "Listas e estrutura semântica",
        pergunta: "7. Qual elemento HTML é utilizado para criar uma lista não ordenada?",
        alternativas: [
            "<ol>",
            "<li>",
            "<ul>",
            "<dl>"
        ],
        respostaCorreta: 2,
        explicacao: "O <ul> cria uma lista não ordenada. Cada item dessa lista deve ser colocado dentro de um elemento <li>."
    },
    {
        categoria: "Listas e estrutura semântica",
        pergunta: "8. Qual elemento representa o conteúdo principal de uma página?",
        alternativas: [
            "<footer>",
            "<nav>",
            "<aside>",
            "<main>"
        ],
        respostaCorreta: 3,
        explicacao: "O <main> identifica o conteúdo principal da página, diferenciando-o de elementos complementares, cabeçalhos e navegação."
    },
    {
        categoria: "Formulários",
        pergunta: "9. Para que servem os elementos <label> e o atributo for?",
        alternativas: [
            "Para definir o tamanho de um campo",
            "Para associar um rótulo a um campo do formulário",
            "Para enviar os dados ao servidor",
            "Para criar uma lista de opções"
        ],
        respostaCorreta: 1,
        explicacao: "O atributo for do <label> deve corresponder ao id do campo. Isso associa o rótulo ao controle e melhora a acessibilidade."
    },
    {
        categoria: "Formulários",
        pergunta: "10. Qual atributo indica que um campo precisa ser preenchido?",
        alternativas: [
            "placeholder",
            "autocomplete",
            "required",
            "value"
        ],
        respostaCorreta: 2,
        explicacao: "O atributo required indica que o preenchimento do campo é obrigatório antes do envio do formulário."
    }
];

// ===== RENDERIZAÇÃO DAS PERGUNTAS =====
const container = document.getElementById("perguntas-container");
let categoriaAtual = "";

perguntas.forEach((q, index) => {
    // Verifica se a categoria mudou
    if (q.categoria !== categoriaAtual) {
        categoriaAtual = q.categoria;

        const h4 = document.createElement("h4");
        h4.textContent = categoriaAtual;

        container.appendChild(h4);
    }

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("questao");

    // Legenda da questão
    const legend = document.createElement("legend");

    const numero = document.createElement("span");
    numero.classList.add("numero-questao");
    numero.textContent = index + 1;

    const textoPergunta = document.createTextNode(
        ` ${q.pergunta.replace(/^\d+\.\s*/, "")}`
    );

    legend.append(numero, textoPergunta);
    fieldset.appendChild(legend);

    // Alternativas
    q.alternativas.forEach((alt, i) => {
        const div = document.createElement("div");
        div.classList.add("alternativa");

        const input = document.createElement("input");

        input.type = "radio";
        input.name = `resposta${index + 1}`;
        input.id = `resposta${index + 1}-${String.fromCharCode(97 + i)}`;
        input.value = i;

        const label = document.createElement("label");
        label.htmlFor = input.id;

        // Evita que tags HTML sejam interpretadas
        label.textContent = `${String.fromCharCode(65 + i)}) ${alt}`;

        div.append(input, label);
        fieldset.appendChild(div);
    });

    container.appendChild(fieldset);
});

// ===== CORREÇÃO =====
const form = document.getElementById("form-laboratorio");
const resultado = document.getElementById("resultado");
const pontuacaoEl = document.getElementById("pontuacao");
const feedbackEl = document.getElementById("feedback-detalhado");
const btnRefazer = document.getElementById("btn-refazer");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let acertos = 0;

    feedbackEl.innerHTML = "";

    perguntas.forEach((q, index) => {
        const selecionado = form.querySelector(
            `input[name="resposta${index + 1}"]:checked`
        );

        const fieldset = form.querySelectorAll(".questao")[index];
        fieldset.classList.remove("correta", "errada");

        const divFeedback = document.createElement("div");
        divFeedback.classList.add("feedback-item");

        const titulo = document.createElement("p");

        const numero = document.createElement("strong");
        numero.textContent = `Questão ${index + 1}: `;

        const status = document.createElement("span");

        const explicacao = document.createElement("p");

        explicacao.classList.add("explicacao");
        explicacao.textContent = q.explicacao;

        titulo.append(numero, status);

        if (selecionado && Number(selecionado.value) === q.respostaCorreta) {
            acertos++;

            fieldset.classList.add("correta");
            
            status.textContent = "Correta";
            status.classList.add("acerto");
        } else {
            fieldset.classList.add("errada");

            status.textContent = "Incorreta";
            status.classList.add("erro");

            const respostaCerta = q.alternativas[q.respostaCorreta];
            const resposta = document.createElement("p");
            const textoResposta = document.createElement("strong");

            textoResposta.textContent =
                `Resposta correta: ${String.fromCharCode(65 + q.respostaCorreta)}) ${respostaCerta}`;

            resposta.appendChild(textoResposta);
            divFeedback.append(titulo, resposta, explicacao);
            feedbackEl.appendChild(divFeedback);

            return;
        }

        divFeedback.append(titulo, explicacao);

        feedbackEl.appendChild(divFeedback);
    });

    // Calcula a pontuação
    const percentual = Math.round(
        (acertos / perguntas.length) * 100
    );

    pontuacaoEl.textContent =
        `Você acertou ${acertos} de ${perguntas.length} questões (${percentual}%).`;

    resultado.hidden = false;

    resultado.scrollIntoView({
        behavior: "smooth"
    });

});

// ===== REFAZER EXERCÍCIO =====
btnRefazer.addEventListener("click", () => {
    form.reset();

    document.querySelectorAll(".questao").forEach(fieldset => {

        fieldset.classList.remove("correta", "errada");

    });

    // Limpa o resultado anterior
    feedbackEl.innerHTML = "";
    pontuacaoEl.textContent = "";

    resultado.hidden = true;

    window.scrollTo({
        top: form.offsetTop - 80,
        behavior: "smooth"
    });
});