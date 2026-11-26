const perguntas = [
    {
        categoria: "Introdução ao JavaScript",
        pergunta: "1. Qual é a principal função do JavaScript no desenvolvimento web?",
        alternativas: [
            "Definir exclusivamente a aparência visual dos elementos",
            "Estruturar o conteúdo de uma página",
            "Adicionar interatividade e comportamento às páginas",
            "Substituir completamente o HTML e o CSS"
        ],
        respostaCorreta: 2,
        explicacao: "JavaScript acrescenta comportamento e interatividade às páginas, permitindo responder a eventos, realizar cálculos e atualizar o conteúdo dinamicamente."
    },
    {
        categoria: "Variáveis, valores e operadores",
        pergunta: "2. Qual é a principal diferença entre const e let em JavaScript?",
        alternativas: [
            "const permite reatribuição, enquanto let não permite",
            "let permite reatribuição, enquanto const não permite",
            "Ambas permitem reatribuição sem restrições",
            "const armazena apenas textos, enquanto let armazena números"
        ],
        respostaCorreta: 1,
        explicacao: "let permite atribuir um novo valor à variável posteriormente. const impede a reatribuição do identificador, sendo indicada quando não será necessário atribuir outro valor."
    },
    {
        categoria: "Variáveis, valores e operadores",
        pergunta: "3. Qual operador deve ser utilizado para comparar dois valores sem realizar conversão automática de tipos?",
        alternativas: [
            "=",
            "==",
            "===",
            "!="
        ],
        respostaCorreta: 2,
        explicacao: "O operador === compara tanto o valor quanto o tipo dos dados, sem realizar conversão automática. Por exemplo, 5 === \"5\" retorna false."
    },
    {
        categoria: "Condições e repetições",
        pergunta: "4. Qual estrutura é utilizada para executar diferentes blocos de código dependendo de uma condição?",
        alternativas: [
            "for",
            "if e else",
            "console.log",
            "return"
        ],
        respostaCorreta: 1,
        explicacao: "As estruturas if, else if e else permitem executar diferentes blocos de código conforme o resultado das condições avaliadas."
    },
    {
        categoria: "Condições e repetições",
        pergunta: "5. Qual é a principal finalidade de um laço de repetição for?",
        alternativas: [
            "Declarar uma função",
            "Comparar dois valores",
            "Repetir instruções enquanto uma condição for atendida",
            "Armazenar vários valores em um objeto"
        ],
        respostaCorreta: 2,
        explicacao: "O for permite repetir instruções, geralmente utilizando uma variável de controle, uma condição de continuidade e uma atualização a cada repetição."
    },
    {
        categoria: "Funções e resultados",
        pergunta: "6. Qual é a finalidade da palavra-chave return dentro de uma função?",
        alternativas: [
            "Repetir automaticamente a execução da função",
            "Enviar um resultado de volta para quem chamou a função",
            "Declarar uma nova variável global",
            "Exibir obrigatoriamente uma mensagem no console"
        ],
        respostaCorreta: 1,
        explicacao: "O return encerra a execução da função e devolve um valor para quem a chamou. Sem um retorno explícito, a função retorna undefined."
    },
    {
        categoria: "Arrays e objetos",
        pergunta: "7. Qual é a principal diferença entre os métodos map() e filter()?",
        alternativas: [
            "map() remove elementos e filter() ordena a lista",
            "map() transforma cada elemento e filter() seleciona elementos que atendem a uma condição",
            "map() modifica obrigatoriamente o array original e filter() não retorna valores",
            "Ambos possuem exatamente a mesma finalidade"
        ],
        respostaCorreta: 1,
        explicacao: "map() cria um novo array com os resultados da transformação de cada elemento. filter() cria um novo array contendo apenas os elementos que atendem à condição estabelecida."
    },
    {
        categoria: "DOM, eventos e formulários",
        pergunta: "8. Qual é a finalidade do método document.querySelector()?",
        alternativas: [
            "Criar novos arquivos JavaScript",
            "Selecionar o primeiro elemento que corresponde a um seletor CSS",
            "Adicionar automaticamente eventos a todos os elementos",
            "Modificar diretamente as propriedades do CSS"
        ],
        respostaCorreta: 1,
        explicacao: "document.querySelector() permite localizar o primeiro elemento HTML que corresponde ao seletor CSS informado. Caso nenhum elemento seja encontrado, retorna null."
    },
    {
        categoria: "DOM, eventos e formulários",
        pergunta: "9. Para que serve o método preventDefault() em um evento de formulário?",
        alternativas: [
            "Impedir que o usuário digite no formulário",
            "Remover todos os campos preenchidos",
            "Impedir o comportamento padrão associado ao evento",
            "Adicionar automaticamente novos elementos ao DOM"
        ],
        respostaCorreta: 2,
        explicacao: "preventDefault() impede o comportamento padrão de um evento. Em formulários, pode evitar o envio tradicional e a navegação ou recarga da página, permitindo tratar os dados com JavaScript."
    },
    {
        categoria: "Promises, fetch e armazenamento",
        pergunta: "10. Qual é a principal finalidade da combinação async e await em JavaScript?",
        alternativas: [
            "Criar estruturas de repetição automaticamente",
            "Facilitar o trabalho com operações assíncronas e Promises",
            "Armazenar informações permanentemente no navegador",
            "Impedir que uma função retorne valores"
        ],
        respostaCorreta: 1,
        explicacao: "async e await facilitam o trabalho com Promises, permitindo escrever código assíncrono de maneira mais organizada e semelhante à leitura de código síncrono. O await aguarda a resolução ou rejeição de uma Promise."
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