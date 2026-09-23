/* =========================================================
   INSTITUTO RECOMEÇAR
   SCRIPT PRINCIPAL + QUIZZES DOS 7 CURSOS
========================================================= */

/* =========================
   DADOS DOS CURSOS
========================= */

const dadosCursos = {
  informatica: {
    nome: "Informática Básica",
    categoria: "TECNOLOGIA",
    icone: "💻"
  },
  administrativo: {
    nome: "Auxiliar Administrativo",
    categoria: "ADMINISTRAÇÃO",
    icone: "📋"
  },
  financeira: {
    nome: "Educação Financeira",
    categoria: "FINANÇAS",
    icone: "💰"
  },
  mercado: {
    nome: "Preparação para o Mercado",
    categoria: "CARREIRA",
    icone: "🤝"
  },
  comunicacao: {
    nome: "Comunicação Profissional",
    categoria: "DESENVOLVIMENTO",
    icone: "🗣️"
  },
  atendimento: {
    nome: "Atendimento ao Cliente",
    categoria: "ATENDIMENTO",
    icone: "🎧"
  },
  empreendedorismo: {
    nome: "Empreendedorismo",
    categoria: "NEGÓCIOS",
    icone: "🚀"
  }
};

/* VAGAS E CURSOS RELACIONADOS */

const relacaoVagaCurso = {
  administrativo: "administrativo",
  atendimento: "atendimento",
  tecnologia: "informatica",
  financas: "financeira",
  comunicacao: "comunicacao",
  vendas: "mercado",
  empreendedorismo: "empreendedorismo"
};

/* =========================
   BANCO DE PERGUNTAS
   Formato:
   [pergunta, alternativa A, alternativa B, correta]
========================= */

const quizzes = {
  informatica: [
    ["O que é hardware?", "A parte física do computador", "Os programas do computador", "A"],
    ["Para que serve o teclado?", "Exibir imagens", "Digitar textos e comandos", "B"],
    ["O que significa CPU?", "Unidade Central de Processamento", "Controle Principal de Usuários", "A"],
    ["Qual é um sistema operacional?", "Google", "Windows", "B"],
    ["Para que serve o mouse?", "Controlar o cursor", "Armazenar arquivos", "A"],
    ["O que é software?", "A parte física do computador", "Os programas do computador", "B"],
    ["Qual equipamento imprime documentos?", "Impressora", "Roteador", "A"],
    ["Para que serve um antivírus?", "Aumentar a tela", "Proteger contra ameaças", "B"],
    ["O que é a internet?", "Rede mundial de computadores", "Um tipo de teclado", "A"],
    ["Qual é um navegador?", "Word", "Chrome", "B"],
    ["Para que serve a memória RAM?", "Guardar dados temporários em uso", "Imprimir documentos", "A"],
    ["Qual atalho copia um conteúdo?", "Ctrl + V", "Ctrl + C", "B"],
    ["O que é um pendrive?", "Dispositivo portátil de armazenamento", "Editor de imagens", "A"],
    ["Qual programa pode criar textos?", "Word", "Cabo USB", "A"],
    ["Como deve ser uma senha segura?", "Fácil e curta", "Longa e difícil de adivinhar", "B"]
  ],

  administrativo: [
    ["Qual é uma função de um auxiliar administrativo?", "Construir prédios", "Organizar documentos", "B"],
    ["Para que serve um arquivo?", "Fabricar produtos", "Guardar e organizar documentos", "B"],
    ["O que fazer no atendimento ao cliente?", "Ignorar a pessoa", "Ajudar e atender", "B"],
    ["O que significa ser pontual?", "Chegar atrasado", "Chegar no horário", "B"],
    ["Para que serve uma planilha?", "Organizar dados", "Cozinhar", "A"],
    ["O que é uma reunião?", "Um documento", "Um encontro para discutir assuntos", "B"],
    ["Qual característica é importante no trabalho administrativo?", "Descuido", "Organização", "B"],
    ["Para que serve o e-mail profissional?", "Fazer compras obrigatoriamente", "Trocar mensagens de trabalho", "B"],
    ["O que é um documento?", "Objeto sem função", "Registro de informações", "B"],
    ["O que é trabalho em equipe?", "Trabalhar com outras pessoas", "Agir contra colegas", "A"],
    ["Como a organização de documentos ajuda?", "Dificulta encontrar informações", "Facilita localizar informações", "B"],
    ["O que é cumprir um prazo?", "Entregar a qualquer momento", "Entregar até o horário combinado", "B"],
    ["Com o que o auxiliar administrativo trabalha?", "Apenas esportes", "Documentos e informações", "B"],
    ["Para que um computador pode ser usado no escritório?", "Criar e organizar documentos", "Somente entretenimento", "A"],
    ["Como deve ser um bom atendimento?", "Rígido e pouco prestativo", "Educado e prestativo", "B"]
  ],

  financeira: [
    ["O que é educação financeira?", "Gastar todo o dinheiro", "Aprender a administrar o dinheiro", "B"],
    ["O que é um orçamento?", "Planejamento de receitas e despesas", "Uma lista de desejos", "A"],
    ["Para que serve poupar?", "Nunca usar o dinheiro", "Ajudar em objetivos e imprevistos", "B"],
    ["Qual é um exemplo de despesa essencial?", "Alimentação e moradia", "Compras por diversão", "A"],
    ["Antes de comprar, o que fazer?", "Verificar se cabe no orçamento", "Comprar sem olhar o preço", "B"],
    ["Para que serve uma reserva de emergência?", "Cobrir imprevistos", "Pagar apenas lazer", "B"],
    ["Por que comparar preços?", "Encontrar condições e economizar", "Escolher sempre o mais caro", "A"],
    ["O que são juros?", "Dinheiro cobrado ou recebido pelo uso do dinheiro ao longo do tempo", "Um desconto obrigatório", "B"],
    ["Como usar o cartão de crédito com responsabilidade?", "Considerar a capacidade de pagamento", "Gastar até ultrapassar o limite", "B"],
    ["O que pode acontecer ao gastar mais do que se ganha?", "Acumular dívidas", "Receber sempre mais dinheiro", "A"],
    ["Para que definir objetivos financeiros?", "Evitar qualquer planejamento", "Organizar o dinheiro para metas", "B"],
    ["O que significa economizar?", "Gastar todo o dinheiro", "Gastar menos do que se recebe e poupar", "B"],
    ["O que é investir?", "Aplicar recursos buscando retorno, considerando riscos", "Colocar dinheiro em qualquer lugar", "A"],
    ["Por que acompanhar despesas?", "Ignorar para onde vai o dinheiro", "Entender como o dinheiro é usado", "B"],
    ["O que a educação financeira favorece?", "Decisões conscientes", "Gastos sem planejamento", "A"]
  ],

  mercado: [
    ["O que é empregabilidade?", "Ter um emprego fixo para sempre", "Manter-se relevante e conseguir oportunidades de trabalho", "B"],
    ["Qual é um primeiro passo na carreira?", "Autoconhecimento", "Enviar o mesmo currículo para todas as vagas", "A"],
    ["O que pode chamar atenção em uma análise de currículo?", "Somente um design colorido", "Experiências relevantes para a vaga", "B"],
    ["O que uma entrevista comportamental busca conhecer?", "Como o perfil se relaciona com a cultura e situações de trabalho", "Somente se a pessoa fala inglês", "A"],
    ["Como apresentar um currículo sem experiência formal?", "Incluir projetos, cursos, voluntariado ou atividades acadêmicas", "Deixar o currículo em branco", "A"],
    ["O que é cultura organizacional?", "Festas e código de vestimenta apenas", "Valores, regras e formas de trabalhar", "B"],
    ["Se faltar experiência exigida, o que fazer?", "Nunca se candidatar", "Apresentar habilidades transferíveis e disposição para aprender", "B"],
    ["Qual é a função de uma carta de apresentação?", "Repetir o currículo inteiro", "Explicar a adequação àquela oportunidade", "B"],
    ["O que significa PDI?", "Plano de Desenvolvimento Individual", "Programa de Descontos Internos", "A"],
    ["Como lidar com ansiedade antes da entrevista?", "Preparar-se, praticar e lembrar que é uma conversa de mão dupla", "Memorizar respostas prontas da internet", "A"],
    ["O que é uma vaga afirmativa?", "Uma vaga aberta obrigatoriamente a qualquer pessoa", "Uma vaga direcionada a grupos específicos para promover diversidade", "B"],
    ["O que é job rotation?", "Permanecer dez anos na mesma função", "Passar por áreas diferentes para aprender", "B"],
    ["Qual é a diferença entre estágio e trainee?", "Estágio é voltado a estudantes; trainee costuma focar recém-formados e desenvolvimento profissional", "São exatamente a mesma coisa", "A"],
    ["Como falar sobre pretensão salarial?", "Pesquisar a média e informar uma faixa", "Aceitar trabalhar sem remuneração", "A"],
    ["Como agir após uma rejeição?", "Pedir feedback quando possível, agradecer e continuar se preparando", "Bloquear a empresa", "A"]
  ],

  comunicacao: [
    ["Como deve ser a comunicação profissional?", "Difícil de entender", "Clara, respeitosa e objetiva", "B"],
    ["Como escrever um e-mail profissional?", "Assunto claro, saudação, objetivo, despedida e nome", "Tudo em maiúsculas e sem assunto", "A"],
    ["O que caracteriza comunicação passiva?", "Não expressar opiniões por medo de conflito", "Gritar para impor uma ideia", "A"],
    ["O que caracteriza comunicação agressiva?", "Impor opiniões sem respeitar os outros", "Falar com calma e firmeza", "B"],
    ["O que é comunicação assertiva?", "Expressar necessidades com respeito, clareza e escuta", "Ficar sempre em silêncio", "A"],
    ["O que faz parte da comunicação não verbal?", "Postura, tom de voz e contato visual", "Somente os slides", "A"],
    ["O que é escuta ativa?", "Prestar atenção, não interromper e demonstrar compreensão", "Fingir atenção enquanto olha o celular", "B"],
    ["Como apresentar um projeto?", "Ler tudo dos slides sem olhar para ninguém", "Olhar para o público, manter postura e explicar com suas palavras", "B"],
    ["Qual é um exemplo de feedback construtivo?", "Apontar algo positivo e sugerir como melhorar", "Dizer apenas que ficou horrível", "B"],
    ["Como usar o WhatsApp profissionalmente?", "Mensagens claras, corretas e respeitando horários", "Áudios longos e gírias em qualquer situação", "B"],
    ["O que é ruído na comunicação?", "Algo que dificulta a compreensão", "Somente barulho da rua", "A"],
    ["Como se preparar para falar em público?", "Praticar e controlar a respiração", "Falar o mais rápido possível", "A"],
    ["Se uma instrução do chefe não ficou clara, o que fazer?", "Perguntar educadamente para esclarecer", "Fazer qualquer coisa por vergonha", "B"],
    ["O que é storytelling profissional?", "Inventar experiências", "Contar experiências de forma envolvente e verdadeira", "B"],
    ["Como agir em uma reunião on-line?", "Deixar microfone aberto e fazer várias coisas", "Entrar no horário, silenciar quando não falar e participar", "B"]
  ],

  atendimento: [
    ["O que é importante no atendimento?", "Ser educado e claro", "Ignorar o cliente", "A"],
    ["Como atender bem?", "Agir sem prestar atenção", "Ouvir com atenção", "B"],
    ["Para que serve o chat de um site?", "Permitir que usuários tirem dúvidas", "Impedir perguntas", "A"],
    ["O que fazer quando alguém apresenta um problema?", "Ignorar", "Ajudar a buscar uma solução", "B"],
    ["Como deve ser uma resposta ao cliente?", "Clara e objetiva", "Confusa e incompleta", "A"],
    ["Para que serve o e-mail de atendimento?", "Impedir comunicação", "Manter contato e responder solicitações", "B"],
    ["Como tratar quem está sendo atendido?", "Com respeito", "De forma grosseira", "A"],
    ["Para que serve uma seção de FAQ?", "Responder perguntas frequentes", "Esconder informações", "A"],
    ["Qual é um exemplo de atendimento on-line?", "Chat ou formulário de contato", "Não oferecer comunicação", "A"],
    ["Que tipo de informação deve ser fornecida?", "Informações úteis e corretas", "Informações propositalmente erradas", "B"],
    ["Antes de responder a uma dúvida, o que fazer?", "Entender a dúvida", "Encerrar sem ajudar", "A"],
    ["Como lidar com uma reclamação?", "Ignorar", "Ouvir e buscar uma solução", "B"],
    ["Como a rapidez pode ajudar?", "Pode melhorar a experiência do usuário", "Sempre prejudica", "A"],
    ["Qual postura é adequada no atendimento?", "Respeitosa", "Agressiva", "A"],
    ["Qual é o objetivo do atendimento?", "Complicar a situação", "Ajudar a resolver dúvidas e problemas", "B"]
  ],

  empreendedorismo: [
    ["O que é empreendedorismo?", "Criar, desenvolver e buscar oportunidades", "Evitar riscos e mudanças sempre", "A"],
    ["Quem pode ser empreendedor?", "Somente quem já tem empresa", "Quem identifica oportunidades e soluções", "B"],
    ["O que é inovação?", "Criar ou melhorar produtos, serviços e processos", "Repetir sempre as mesmas ideias", "A"],
    ["Quem é o cliente?", "Quem compra ou utiliza um produto ou serviço", "Quem administra obrigatoriamente a empresa", "A"],
    ["O que é um produto?", "Uma atividade oferecida para atender uma necessidade", "Um bem ou objeto oferecido ou vendido", "B"],
    ["O que é um serviço?", "Uma atividade oferecida para atender uma necessidade", "Um objeto necessariamente produzido", "A"],
    ["Para que serve o planejamento?", "Começar sem objetivos", "Organizar ações e recursos antecipadamente", "B"],
    ["O que é lucro?", "O valor que sobra após custos e despesas", "Todo o dinheiro recebido", "A"],
    ["Qual habilidade é importante para empreender?", "Evitar mudanças", "Identificar problemas e buscar soluções", "B"],
    ["O que é uma oportunidade de negócio?", "Uma situação que pode ser aproveitada para criar uma solução ou negócio", "Uma dificuldade que impede empreender", "A"],
    ["Por que conhecer os clientes?", "Compreender necessidades, preferências e comportamentos", "Diminuir a variedade sem avaliar necessidades", "A"],
    ["Qual característica pode ajudar quem empreende?", "Falta de iniciativa", "Criatividade e identificação de oportunidades", "B"],
    ["O que pode ajudar um negócio a crescer?", "Planejamento, organização e atenção às necessidades dos clientes", "Falta de planejamento e atenção", "A"],
    ["Por que criar um negócio?", "Para atender uma necessidade ou resolver um problema", "Para vender sem considerar clientes", "A"],
    ["O que é uma ideia de negócio?", "Uma atividade já funcionando que nunca pode mudar", "Uma proposta inicial de produto, serviço ou solução", "B"]
  ]
};

/* =========================================================
   ENTREVISTA
========================================================= */

function entrevistaConcluida() {
  return localStorage.getItem("entrevistaConcluida") === "sim";
}

function exigirEntrevista() {
  if (!entrevistaConcluida()) {
    alert("Para continuar, complete primeiro sua entrevista.");
    window.location.href = "entrevista.html";
    return false;
  }

  return true;
}

function pegarDadosEntrevista() {
  try {
    return JSON.parse(localStorage.getItem("dadosEntrevista")) || {};
  } catch {
    return {};
  }
}

function salvarDadosEntrevista(dados) {
  localStorage.setItem("dadosEntrevista", JSON.stringify(dados));
  localStorage.setItem("entrevistaConcluida", "sim");
}

/* =========================================================
   CURSOS E PROGRESSO
========================================================= */

function pegarCursos() {
  try {
    return JSON.parse(localStorage.getItem("cursosUsuario")) || {};
  } catch {
    return {};
  }
}

function salvarCursos(cursos) {
  localStorage.setItem("cursosUsuario", JSON.stringify(cursos));
}

function calcularProgressoGeral() {
  const cursos = pegarCursos();
  const valores = Object.values(cursos);

  if (valores.length === 0) {
    return 0;
  }

  const soma = valores.reduce((total, valor) => {
    return total + Number(valor || 0);
  }, 0);

  return Math.round(soma / valores.length);
}

function atualizarProgressoGeral() {
  const cursos = pegarCursos();
  const valores = Object.values(cursos);
  const normalizados = valores.map(valor =>
    Math.max(0, Math.min(100, Number(valor) || 0))
  );
  const progresso = normalizados.length
    ? Math.round(normalizados.reduce((total, valor) => total + valor, 0) / normalizados.length)
    : 0;

  localStorage.setItem("progressoGeral", String(progresso));

  // A barra do perfil é o elemento interno .progresso; não inserir texto nela.
  document.querySelectorAll(".progresso-geral .barra .progresso").forEach(barra => {
    barra.style.width = `${progresso}%`;
    barra.setAttribute("role", "progressbar");
    barra.setAttribute("aria-valuemin", "0");
    barra.setAttribute("aria-valuemax", "100");
    barra.setAttribute("aria-valuenow", String(progresso));
  });

  ["progresso-perfil", "progresso-medio"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = `${progresso}%`;
  });

  document.querySelectorAll(".progresso-numero, .texto-progresso-geral").forEach(el => {
    el.textContent = `${progresso}%`;
  });

  document.querySelectorAll(".barra-grande-progresso").forEach(barra => {
    barra.style.width = `${progresso}%`;
    barra.setAttribute("role", "progressbar");
    barra.setAttribute("aria-valuemin", "0");
    barra.setAttribute("aria-valuemax", "100");
    barra.setAttribute("aria-valuenow", String(progresso));
  });

  const ativos = normalizados.filter(valor => valor < 100).length;
  const concluidos = normalizados.filter(valor => valor >= 100).length;
  const ativoEl = document.getElementById("numero-cursos-ativos");
  const concluidoEl = document.getElementById("numero-cursos-concluidos");
  if (ativoEl) ativoEl.textContent = String(ativos);
  if (concluidoEl) concluidoEl.textContent = String(concluidos);

}

function atualizarNomeUsuario() {
  const nome = localStorage.getItem("usuarioNome") || "Participante";
  const elemento = document.getElementById("nome-usuario");

  if (elemento) {
    elemento.textContent = nome;
  }
}

/* =========================================================
   VAGAS CANDIDATADAS
========================================================= */

function pegarVagasCandidatadas() {
  try {
    return JSON.parse(localStorage.getItem("vagasCandidatadas")) || [];
  } catch {
    return [];
  }
}

function salvarVagasCandidatadas(vagas) {
  localStorage.setItem("vagasCandidatadas", JSON.stringify(vagas));
}

/* =========================================================
   INSCRIÇÃO EM CURSOS
========================================================= */

function iniciarCurso(idCurso) {
  if (!exigirEntrevista()) {
    return;
  }

  if (!dadosCursos[idCurso]) {
    alert("Curso não encontrado.");
    return;
  }

  const cursos = pegarCursos();

  if (Object.prototype.hasOwnProperty.call(cursos, idCurso)) {
    alert("Você já está inscrito neste curso.");
    return;
  }

  cursos[idCurso] = 0;

  salvarCursos(cursos);

  atualizarProgressoGeral();
  atualizarPaginaCursos();
  atualizarBotoesCursosRecomendados();
  atualizarBotoesVagas();

  alert("Inscrição realizada! Você já pode iniciar o curso.");
}

/* =========================================================
   SISTEMA DE QUIZ
========================================================= */

let cursoQuizAtual = null;

function iniciarQuiz(idCurso) {
  if (!exigirEntrevista()) {
    return;
  }

  const cursos = pegarCursos();

  if (!Object.prototype.hasOwnProperty.call(cursos, idCurso)) {
    alert("Inscreva-se no curso antes de começar.");
    return;
  }

  if (!quizzes[idCurso]) {
    alert("Não foi possível carregar o quiz deste curso.");
    return;
  }

  if (Number(cursos[idCurso]) >= 100) {
    alert("Você já concluiu este curso!");
    return;
  }

  cursoQuizAtual = idCurso;

  mostrarQuiz();
}

function mostrarQuiz() {
  const area = document.getElementById("area-quiz");

  if (!area || !cursoQuizAtual) {
    return;
  }

  const cursos = pegarCursos();
  const progresso = Number(cursos[cursoQuizAtual] || 0);
  const etapa = Math.floor(progresso / 20);
  const inicio = etapa * 3;

  const perguntas = quizzes[cursoQuizAtual].slice(inicio, inicio + 3);

  const titulo = document.getElementById("quiz-titulo");
  const categoria = document.getElementById("quiz-categoria");
  const instrucao = document.getElementById("quiz-instrucao");
  const etapaTexto = document.getElementById("quiz-etapa");
  const textoProgresso = document.getElementById("quiz-texto-progresso");
  const barra = document.getElementById("quiz-barra-progresso");
  const container = document.getElementById("quiz-perguntas");
  const mensagem = document.getElementById("quiz-mensagem");

  if (titulo) {
    titulo.textContent = dadosCursos[cursoQuizAtual].nome;
  }

  if (categoria) {
    categoria.textContent = dadosCursos[cursoQuizAtual].categoria;
  }

  if (instrucao) {
    instrucao.textContent = "Responda às 3 perguntas para avançar nesta etapa.";
  }

  if (etapaTexto) {
    etapaTexto.textContent = `Etapa ${etapa + 1} de 5`;
  }

  if (textoProgresso) {
    textoProgresso.textContent = `Progresso do curso: ${progresso}%`;
  }

  if (barra) {
    barra.style.width = progresso + "%";
  }

  if (mensagem) {
    mensagem.textContent = "";
  }

  if (container) {
    container.innerHTML = "";

    perguntas.forEach((pergunta, indice) => {
      const numero = inicio + indice + 1;

      const bloco = document.createElement("fieldset");
      bloco.className = "quiz-pergunta";

      const legenda = document.createElement("legend");
      legenda.textContent = `${numero}. ${pergunta[0]}`;

      bloco.appendChild(legenda);

      ["A", "B"].forEach(letra => {
        const rotulo = document.createElement("label");
        rotulo.className = "quiz-alternativa";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `pergunta-${indice}`;
        radio.value = letra;
        radio.required = true;

        const texto = document.createElement("span");

        texto.textContent =
          `${letra}) ${pergunta[letra === "A" ? 1 : 2]}`;

        rotulo.appendChild(radio);
        rotulo.appendChild(texto);

        bloco.appendChild(rotulo);
      });

      container.appendChild(bloco);
    });
  }

  area.hidden = false;

  area.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function conferirQuiz(evento) {
  evento.preventDefault();

  if (!cursoQuizAtual) {
    return;
  }

  const cursos = pegarCursos();
  const progresso = Number(cursos[cursoQuizAtual] || 0);
  const etapa = Math.floor(progresso / 20);
  const inicio = etapa * 3;

  const perguntas = quizzes[cursoQuizAtual].slice(inicio, inicio + 3);
  const mensagem = document.getElementById("quiz-mensagem");

  let acertos = 0;
  let respondidas = 0;

  perguntas.forEach((pergunta, indice) => {
    const marcada = document.querySelector(
      `input[name="pergunta-${indice}"]:checked`
    );

    if (marcada) {
      respondidas++;

      if (marcada.value === pergunta[3]) {
        acertos++;
      }
    }
  });

  if (respondidas < 3) {
    if (mensagem) {
      mensagem.textContent =
        "Responda às 3 perguntas antes de conferir.";
    }

    return;
  }

  // Só avança quando as três respostas da etapa estiverem corretas.
  // Uma resposta errada mantém o progresso e reapresenta as mesmas perguntas.
  if (acertos === 3) {
    const novoProgresso = Math.min(100, Math.floor(progresso / 20) * 20 + 20);
    cursos[cursoQuizAtual] = novoProgresso;
    salvarCursos(cursos);

    if (mensagem) {
      mensagem.textContent = novoProgresso >= 100
        ? "Parabéns! Você concluiu este curso!"
        : `Etapa concluída! Progresso: ${novoProgresso}%. Carregando as próximas 3 perguntas...`;
    }

    atualizarProgressoGeral();
    atualizarPaginaCursos();
    atualizarBotoesCursosRecomendados();

    if (novoProgresso >= 100) {
      fecharQuiz();
      alert("Parabéns! Você concluiu este curso!");
    } else {
      mostrarQuiz();
    }
    return;
  }

  if (mensagem) {
    mensagem.textContent = `Você acertou ${acertos} de 3. O progresso continua em ${progresso}%. Corrija as respostas e tente novamente; as mesmas 3 perguntas permanecerão até acertar todas.`;
  }
}

function fecharQuiz() {
  const area = document.getElementById("area-quiz");
  const formulario = document.getElementById("formulario-quiz");

  if (area) {
    area.hidden = true;
  }

  if (formulario) {
    formulario.reset();
  }

  cursoQuizAtual = null;
}

/* O botão continuar abre o quiz */

function avancarCurso(idCurso) {
  iniciarQuiz(idCurso);
}

/* =========================================================
   ATUALIZAÇÃO DA PÁGINA DE CURSOS
========================================================= */

function atualizarPaginaCursos() {
  const cursos = pegarCursos();

  const andamento = document.getElementById("cursos-em-andamento");
  const concluidos = document.getElementById("cursos-concluidos");

  if (andamento) {
    andamento.innerHTML = "";
  }

  if (concluidos) {
    concluidos.innerHTML = "";
  }

  Object.entries(cursos).forEach(([idCurso, progresso]) => {
    const curso = dadosCursos[idCurso];

    if (!curso) {
      return;
    }

    const progressoNumerico = Number(progresso) || 0;
    const concluido = progressoNumerico >= 100;
    const destino = concluido ? concluidos : andamento;

    if (!destino) {
      return;
    }

    const card = document.createElement("article");
    card.className = "curso-card";

    const titulo = document.createElement("h3");
    titulo.textContent = `${curso.icone} ${curso.nome}`;

    const categoria = document.createElement("p");
    categoria.textContent = curso.categoria;

    const textoProgresso = document.createElement("p");
    textoProgresso.textContent =
      `Progresso: ${progressoNumerico}%`;

    const barraFundo = document.createElement("div");
    barraFundo.className = "barra-progresso";

    const barra = document.createElement("div");
    barra.className = "barra-grande-progresso";
    barra.style.width = `${progressoNumerico}%`;

    barraFundo.appendChild(barra);

    card.append(
      titulo,
      categoria,
      textoProgresso,
      barraFundo
    );

    if (concluido) {
      const selo = document.createElement("p");
      selo.className = "curso-concluido";
      selo.textContent = "✓ Curso concluído";

      card.appendChild(selo);
    } else {
      const botaoContinuar = document.createElement("button");

      botaoContinuar.type = "button";
      botaoContinuar.className = "botao-continuar";
      botaoContinuar.dataset.curso = idCurso;
      botaoContinuar.textContent = "Continuar curso";

      card.appendChild(botaoContinuar);
    }

    const botaoCancelar = document.createElement("button");

    botaoCancelar.type = "button";
    botaoCancelar.className = "botao-cancelar-curso";
    botaoCancelar.dataset.curso = idCurso;
    botaoCancelar.textContent = "Cancelar inscrição";

    card.appendChild(botaoCancelar);

    destino.appendChild(card);
  });

  /* Botões de inscrição existentes no HTML */

  document.querySelectorAll(".botao-curso").forEach(botao => {
    if (botao.dataset.ativado === "sim") {
      return;
    }

    botao.dataset.ativado = "sim";

    botao.addEventListener("click", () => {
      iniciarCurso(botao.dataset.curso || botao.dataset.id);
    });
  });

  /* Botões de continuar */

  document.querySelectorAll(".botao-continuar").forEach(botao => {
    botao.onclick = () => {
      iniciarQuiz(botao.dataset.curso);
    };
  });

  /* Botões de cancelar */

  document.querySelectorAll(".botao-cancelar-curso").forEach(botao => {
    botao.onclick = () => {
      cancelarCurso(botao.dataset.curso);
    };
  });

  atualizarProgressoGeral();
}

/* =========================================================
   CURSOS RECOMENDADOS
========================================================= */

function atualizarBotoesCursosRecomendados() {
  const cursos = pegarCursos();

  document.querySelectorAll(".botao-inscrever-curso").forEach(botao => {
    const idCurso = botao.dataset.curso || botao.dataset.id;

    const inscrito = Object.prototype.hasOwnProperty.call(
      cursos,
      idCurso
    );

    botao.textContent = inscrito ? "Inscrito" : "Inscrever-se";
    botao.disabled = inscrito;

    if (botao.dataset.ativado === "sim") {
      return;
    }

    botao.dataset.ativado = "sim";

    botao.addEventListener("click", () => {
      iniciarCurso(idCurso);
    });
  });
}

/* =========================================================
   CANCELAR INSCRIÇÃO EM CURSO
========================================================= */

function cancelarCurso(idCurso) {
  const cursos = pegarCursos();

  if (!Object.prototype.hasOwnProperty.call(cursos, idCurso)) {
    alert("Você não está inscrito neste curso.");
    return;
  }

  const confirmar = confirm(
    "Deseja realmente cancelar sua inscrição neste curso?"
  );

  if (!confirmar) {
    return;
  }

  delete cursos[idCurso];

  salvarCursos(cursos);

  /* Remove candidaturas relacionadas ao curso */

  const vagas = pegarVagasCandidatadas();

  const vagasAtualizadas = vagas.filter(idVaga => {
    const cursoRelacionado = relacaoVagaCurso[idVaga];

    return cursoRelacionado !== idCurso;
  });

  salvarVagasCandidatadas(vagasAtualizadas);

  atualizarProgressoGeral();
  atualizarPaginaCursos();
  atualizarBotoesCursosRecomendados();
  atualizarBotoesVagas();

  alert(
    "Inscrição cancelada. A vaga relacionada também foi liberada novamente."
  );
}

/* =========================================================
   CANDIDATURAS A VAGAS
========================================================= */

function candidatarVaga(idVaga) {
  if (!exigirEntrevista()) {
    return;
  }

  const vagas = pegarVagasCandidatadas();

  if (vagas.includes(idVaga)) {
    alert("Você já se candidatou para esta vaga.");
    return;
  }

  vagas.push(idVaga);

  salvarVagasCandidatadas(vagas);

  /* Inscreve automaticamente no curso relacionado */

  const idCurso = relacaoVagaCurso[idVaga];

  if (idCurso && dadosCursos[idCurso]) {
    const cursos = pegarCursos();

    if (!Object.prototype.hasOwnProperty.call(cursos, idCurso)) {
      cursos[idCurso] = 0;
      salvarCursos(cursos);
    }
  }

  atualizarProgressoGeral();
  atualizarPaginaCursos();
  atualizarBotoesCursosRecomendados();
  atualizarBotoesVagas();

  alert(
    "Candidatura registrada! Confira os cursos recomendados para esta oportunidade."
  );

  window.location.href = "cursos.html";
}

function atualizarBotoesVagas() {
  const vagas = pegarVagasCandidatadas();

  document.querySelectorAll(".botao-candidatar").forEach(botao => {
    const idVaga = botao.dataset.vaga || botao.dataset.id;

    const candidatado = vagas.includes(idVaga);

    botao.textContent = candidatado
      ? "Candidatado"
      : "Candidatar-se";

    botao.disabled = candidatado;

    if (botao.dataset.ativado === "sim") {
      return;
    }

    botao.dataset.ativado = "sim";

    botao.addEventListener("click", () => {
      candidatarVaga(idVaga);
    });
  });
}

/* =========================================================
   FILTRO DE VAGAS
========================================================= */

function filtrarVagas() {
  const campoPesquisa = document.getElementById("pesquisa-vaga");
  const campoArea = document.getElementById("filtro-area");

  const pesquisa = campoPesquisa
    ? campoPesquisa.value.toLowerCase().trim()
    : "";

  const areaSelecionada = campoArea
    ? campoArea.value.toLowerCase().trim()
    : "todos";

  document.querySelectorAll(".vaga-card").forEach(card => {
    const texto = card.textContent.toLowerCase();

    /*
      O HTML usa data-vaga.
      Por isso, usamos data-vaga como referência da área.
    */

    const idVaga = (
      card.dataset.vaga ||
      card.dataset.area ||
      ""
    ).toLowerCase();

    const combinaPesquisa = texto.includes(pesquisa);

    /*
      "todos" mostra todas as vagas.
      Também aceita "todas", caso exista no HTML.
    */

    const combinaArea =
      !areaSelecionada ||
      areaSelecionada === "todos" ||
      areaSelecionada === "todas" ||
      idVaga === areaSelecionada ||
      idVaga.includes(areaSelecionada);

    card.hidden = !(combinaPesquisa && combinaArea);
  });
}

/* =========================================================
   CADASTRO
========================================================= */

function configurarCadastro() {
  const formulario = document.getElementById("formulario-cadastro");

  if (!formulario || formulario.dataset.ativado === "sim") {
    return;
  }

  formulario.dataset.ativado = "sim";

  formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email-cadastro");
    const campoSenha = document.getElementById("senha-cadastro");

    const nome = campoNome?.value.trim();
    const email = campoEmail?.value.trim();
    const senha = campoSenha?.value;

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);

    localStorage.setItem("cursosUsuario", JSON.stringify({}));
    localStorage.setItem("vagasCandidatadas", JSON.stringify([]));

    localStorage.removeItem("dadosEntrevista");
    localStorage.removeItem("entrevistaConcluida");

    localStorage.setItem("progressoGeral", "0");

    alert("Cadastro realizado! Vamos completar sua entrevista.");

    window.location.href = "entrevista.html";
  });
}

/* =========================================================
   CONFIGURAÇÃO DA ENTREVISTA
========================================================= */

function configurarEntrevista() {
  const formulario = document.getElementById("formulario-entrevista");

  if (!formulario || formulario.dataset.ativado === "sim") {
    return;
  }

  formulario.dataset.ativado = "sim";

  const dados = pegarDadosEntrevista();

  const campos = {
    "entrevista-nome": dados.nome,
    "entrevista-endereco": dados.endereco,
    "entrevista-cpf": dados.cpf,
    "entrevista-telefone": dados.telefone,
    "entrevista-experiencia": dados.experiencia,
    "entrevista-habilidades": dados.habilidades
  };

  Object.entries(campos).forEach(([id, valor]) => {
    const campo = document.getElementById(id);

    if (campo && valor) {
      campo.value = valor;
    }
  });

  formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const dadosEntrevista = {
      nome:
        document.getElementById("entrevista-nome")?.value.trim() || "",

      endereco:
        document.getElementById("entrevista-endereco")?.value.trim() || "",

      cpf:
        document.getElementById("entrevista-cpf")?.value.trim() || "",

      telefone:
        document.getElementById("entrevista-telefone")?.value.trim() || "",

      experiencia:
        document.getElementById("entrevista-experiencia")?.value.trim() || "",

      habilidades:
        document.getElementById("entrevista-habilidades")?.value.trim() || ""
    };

    const obrigatorios = [
      dadosEntrevista.nome,
      dadosEntrevista.endereco,
      dadosEntrevista.cpf,
      dadosEntrevista.telefone
    ];

    if (obrigatorios.some(valor => !valor)) {
      alert("Preencha os campos obrigatórios da entrevista.");
      return;
    }

    salvarDadosEntrevista(dadosEntrevista);

    localStorage.setItem(
      "usuarioNome",
      dadosEntrevista.nome
    );

    alert("Entrevista salva com sucesso!");

    window.location.href = "perfil.html";
  });
}

/* =========================================================
   LOGIN
========================================================= */

function configurarLogin() {
  const formulario = document.querySelector(".caixa-login form");

  if (!formulario || formulario.dataset.ativado === "sim") {
    return;
  }

  formulario.dataset.ativado = "sim";

  formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    const email = document.getElementById("email")?.value.trim();
    const senha = document.getElementById("senha")?.value;

    const emailSalvo = localStorage.getItem("usuarioEmail");
    const senhaSalva = localStorage.getItem("usuarioSenha");

    if (!email || !senha) {
      alert("Digite seu e-mail e sua senha.");
      return;
    }

    if (email !== emailSalvo || senha !== senhaSalva) {
      alert(
        "E-mail ou senha incorretos. Confira os dados ou faça seu cadastro."
      );

      return;
    }

    if (entrevistaConcluida()) {
      window.location.href = "perfil.html";
    } else {
      window.location.href = "entrevista.html";
    }
  });
}

/* =========================================================
   SAIR
========================================================= */

function configurarSair() {
  document.querySelectorAll(".botao-sair, [data-sair]").forEach(botao => {
    if (botao.dataset.ativado === "sim") {
      return;
    }

    botao.dataset.ativado = "sim";

    botao.addEventListener("click", evento => {
      evento.preventDefault();

      const confirmar = confirm("Deseja sair da sua conta?");

      if (confirmar) {
        window.location.href = "index.html";
      }
    });
  });
}

/* =========================================================
   MENU ATIVO
========================================================= */

function atualizarMenuAtivo() {
  let paginaAtual = window.location.pathname.split("/").pop();

  if (!paginaAtual) {
    paginaAtual = "index.html";
  }

  document.querySelectorAll("nav a, .menu a").forEach(link => {
    const destino = link.getAttribute("href");

    if (!destino) {
      return;
    }

    if (destino === paginaAtual) {
      link.classList.add("menu-ativo");
    } else {
      link.classList.remove("menu-ativo");
    }
  });
}

/* =========================================================
   INICIALIZAÇÃO GERAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  atualizarNomeUsuario();
  atualizarProgressoGeral();

  atualizarPaginaCursos();
  atualizarBotoesCursosRecomendados();
  atualizarBotoesVagas();

  configurarCadastro();
  configurarEntrevista();
  configurarLogin();
  configurarSair();

  atualizarMenuAtivo();

  // Liga o formulário do quiz à função de correção. Sem este evento,
  // o botão pode apenas tentar enviar/recarregar o formulário.
  const formularioQuiz = document.getElementById("formulario-quiz");
  if (formularioQuiz && formularioQuiz.dataset.ativado !== "sim") {
    formularioQuiz.dataset.ativado = "sim";
    formularioQuiz.addEventListener("submit", conferirQuiz);
  }

  const botaoSairQuiz = document.getElementById("botao-sair-quiz");
  if (botaoSairQuiz && botaoSairQuiz.dataset.ativado !== "sim") {
    botaoSairQuiz.dataset.ativado = "sim";
    botaoSairQuiz.addEventListener("click", fecharQuiz);
  }

  /* Eventos da pesquisa e dos filtros */

  const pesquisa = document.getElementById("pesquisa-vaga");
  const filtro = document.getElementById("filtro-area");

  if (pesquisa) {
    pesquisa.addEventListener("input", filtrarVagas);
  }

  if (filtro) {
    filtro.addEventListener("change", filtrarVagas);
  }

  filtrarVagas();
});