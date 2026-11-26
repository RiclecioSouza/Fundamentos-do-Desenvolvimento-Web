const perguntas = [
    {
        categoria: "Introdução ao CSS",
        pergunta: "1. Qual é a principal função do CSS no desenvolvimento web?",
        alternativas: [
            "Estruturar o conteúdo de uma página",
            "Armazenar informações em um banco de dados",
            "Definir a apresentação visual dos elementos HTML",
            "Controlar exclusivamente o comportamento dos formulários"
        ],
        respostaCorreta: 2,
        explicacao: "O CSS controla a apresentação visual dos elementos HTML, permitindo definir cores, fontes, espaçamentos, layouts e outros aspectos visuais."
    },
    {
        categoria: "Introdução ao CSS",
        pergunta: "2. Qual elemento HTML é utilizado para conectar uma folha de estilos externa?",
        alternativas: [
            "<style>",
            "<link>",
            "<script>",
            "<meta>"
        ],
        respostaCorreta: 1,
        explicacao: "O elemento <link>, geralmente colocado dentro do <head>, permite conectar uma folha CSS externa ao documento HTML."
    },
    {
        categoria: "Seletores e estados",
        pergunta: "3. Qual é a diferença entre os seletores .aviso e #aviso?",
        alternativas: [
            "O primeiro seleciona elementos pelo ID e o segundo pela classe",
            "Ambos selecionam exclusivamente elementos HTML",
            "O primeiro seleciona elementos pela classe e o segundo pelo ID",
            "Ambos selecionam apenas elementos que possuem pseudoclasses"
        ],
        respostaCorreta: 2,
        explicacao: "O ponto (.) representa um seletor de classe, enquanto o símbolo (#) representa um seletor de ID. Classes podem ser reutilizadas em vários elementos, enquanto um ID deve ser único na página."
    },
    {
        categoria: "Seletores e estados",
        pergunta: "4. Qual é a finalidade da pseudoclasse :focus-visible?",
        alternativas: [
            "Aplicar estilos quando um elemento recebe foco de teclado de maneira perceptível",
            "Alterar permanentemente a aparência de um elemento",
            "Selecionar todos os elementos que possuem uma classe específica",
            "Aplicar estilos exclusivamente quando o mouse está sobre um elemento"
        ],
        respostaCorreta: 0,
        explicacao: "A pseudoclasse :focus-visible permite destacar elementos quando recebem foco e o navegador identifica que essa indicação visual é necessária, especialmente durante a navegação por teclado."
    },
    {
        categoria: "Cascata, herança e especificidade",
        pergunta: "5. O que acontece quando duas regras CSS possuem a mesma especificidade e definem a mesma propriedade?",
        alternativas: [
            "A primeira regra sempre prevalece",
            "O navegador ignora as duas regras",
            "A regra que aparece posteriormente geralmente prevalece",
            "A regra com mais propriedades sempre prevalece"
        ],
        respostaCorreta: 2,
        explicacao: "Quando duas regras possuem a mesma prioridade e especificidade, a ordem do código é considerada. Geralmente, a declaração que aparece por último prevalece."
    },
    {
        categoria: "Modelo de caixa e unidades",
        pergunta: "6. Qual é a função da propriedade box-sizing: border-box?",
        alternativas: [
            "Remover automaticamente as margens dos elementos",
            "Incluir padding e border na largura e altura definidas",
            "Adicionar espaçamento externo aos elementos",
            "Impedir que os elementos tenham bordas"
        ],
        respostaCorreta: 1,
        explicacao: "Com box-sizing: border-box, o padding e a borda são incluídos nas dimensões definidas por width e height, tornando o dimensionamento mais previsível."
    },
    {
        categoria: "Flexbox e Grid",
        pergunta: "7. Qual é a principal diferença entre Flexbox e Grid?",
        alternativas: [
            "Flexbox trabalha apenas com imagens, enquanto Grid trabalha com textos",
            "Flexbox organiza elementos em uma dimensão principal, enquanto Grid trabalha com linhas e colunas",
            "Flexbox é utilizado exclusivamente em dispositivos móveis",
            "Grid não permite distribuir espaços entre elementos"
        ],
        respostaCorreta: 1,
        explicacao: "Flexbox é indicado principalmente para organizar elementos em uma dimensão, enquanto Grid permite estruturar layouts em linhas e colunas."
    },
    {
        categoria: "Tipografia, cores e variáveis",
        pergunta: "8. Para que servem as variáveis CSS?",
        alternativas: [
            "Executar funções JavaScript diretamente no CSS",
            "Criar elementos HTML automaticamente",
            "Armazenar e reutilizar valores em diferentes regras CSS",
            "Substituir todos os seletores de uma folha de estilos"
        ],
        respostaCorreta: 2,
        explicacao: "As variáveis CSS permitem armazenar valores reutilizáveis, como cores e espaçamentos. São declaradas com o prefixo -- e podem ser utilizadas com a função var()."
    },
    {
        categoria: "Responsividade e movimento",
        pergunta: "9. Qual é a finalidade das media queries no CSS?",
        alternativas: [
            "Criar automaticamente elementos HTML",
            "Aplicar estilos conforme determinadas condições, como a largura da tela",
            "Armazenar informações do usuário",
            "Impedir que uma página seja acessada em dispositivos móveis"
        ],
        respostaCorreta: 1,
        explicacao: "As media queries permitem aplicar regras CSS condicionais. Por exemplo, podem modificar a quantidade de colunas de um layout quando a largura da tela diminui."
    },
    {
        categoria: "Responsividade e movimento",
        pergunta: "10. Qual é a finalidade de prefers-reduced-motion?",
        alternativas: [
            "Aumentar automaticamente a velocidade das animações",
            "Desativar permanentemente todas as transições do site",
            "Identificar a preferência do usuário por uma experiência com menos movimento",
            "Impedir que elementos utilizem propriedades de transformação"
        ],
        respostaCorreta: 2,
        explicacao: "A media query prefers-reduced-motion identifica se o usuário prefere reduzir movimentos e permite adaptar animações e transições para proporcionar uma experiência mais confortável."
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