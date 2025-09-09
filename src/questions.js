const questions = [
    // 1
  {
    text: "Qual destas visões mais se aproxima da tua forma de ver o propósito da existência?",
    options: [
      { text: "O sentido não é dado, mas construído pelas escolhas livres e autênticas que fazemos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Não existe propósito inerente; o vazio revela a falência dos antigos valores.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "O propósito pode ser descoberto pela razão, pela busca de ordem e coerência universal.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "O sentido está no progresso científico e no impacto prático que podemos gerar no mundo.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 2
  {
    text: "Como entendes o papel do sofrimento na vida?",
    options: [
      { text: "É uma oportunidade para crescer e viver de forma mais autêntica.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "É a prova da absurdidade da vida e da fragilidade das crenças.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Deve ser compreendido e controlado pela razão.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Pode ser reduzido por avanços sociais e científicos.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
    // 3
  {
    text: "Porque é que tantas pessoas parecem perdidas hoje?",
    options: [
      { text: "Porque evitam encarar a liberdade e refugiam-se em papéis sociais.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Porque os valores coletivos são ilusórios e já não sustentam a vida.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Porque a sociedade deixou de ser guiada pela razão e pela verdade universal.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Porque confiam em crenças e tradições em vez de ciência e factos.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 4
  {
    text: "Qual é o papel da espiritualidade ou da fé na vida humana?",
    options: [
      { text: "É uma escolha individual que pode ajudar a enfrentar o caos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "É uma ilusão criada para evitar o vazio; precisamos superá-la.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Deve dialogar com a razão, complementando-a.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "É irrelevante; o que importa é a ciência e a utilidade prática.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 5
  {
    text: "De onde vem o verdadeiro conhecimento?",
    options: [
      { text: "Da experiência vivida e subjetiva de cada um.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Não há conhecimento absoluto; tudo é relativo ou incerto.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Da razão pura e do pensamento lógico.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Da ciência e da observação empírica.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 6
  {
    text: "Como decidimos o que é o “bem”?",
    options: [
      { text: "Cada um deve criar sua própria ética através das escolhas livres.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "O “bem” é uma construção ilusória; nada tem fundamento objetivo.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "O bem é universal, descoberto pela razão e pela lógica.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "O bem é o que gera melhores resultados para a sociedade.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
    // 7
  {
    text: "O que significa ser livre?",
    options: [
      { text: "Escolher livremente, mesmo diante do peso da responsabilidade.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "A liberdade expõe o vazio da vida; nada limita, mas nada dá sentido.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Liberdade é agir de acordo com a razão universal.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Liberdade é poder aplicar o conhecimento científico para mudar a realidade.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 8
  {
    text: "O que guia melhor a humanidade: ciência ou espiritualidade?",
    options: [
      { text: "Nenhum guia fixo: cada pessoa deve decidir o caminho.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Nenhum guia é legítimo; todos são ilusões temporárias.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "A razão pode dialogar com a fé para buscar a verdade.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "A ciência é o único guia confiável.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 9
  {
    text: "Como vês o papel da tecnologia no futuro humano?",
    options: [
      { text: "Uma ferramenta que só ganha valor conforme o uso autêntico que lhe damos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Uma distração que mascara o vazio e a decadência.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Um fruto da razão que deve ser regulado por princípios universais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "O motor do progresso e da melhoria da vida.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 10
  {
    text: "O que mais define a condição humana?",
    options: [
      { text: "A liberdade de escolher e criar significado.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "A consciência do vazio e da falta de fundamento.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "A capacidade de raciocinar e buscar verdades universais.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "A curiosidade científica e a adaptação ao ambiente.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 11
  {
    text: "Como deve ser organizada a sociedade?",
    options: [
      { text: "Através da liberdade individual e da autenticidade.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Nenhuma estrutura é legítima; todas são transitórias.", category: "Niilismo", subCategory: "Anarquismo filosófico", color: "#f44336" },
      { text: "Guiada por princípios racionais e universais de justiça.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Estruturada em torno de ciência, ordem e progresso.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
    // 12
  {
    text: "O que a morte significa para ti?",
    options: [
      { text: "Um lembrete de viver de forma autêntica e responsável.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "A prova final de que nada tem sentido duradouro.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Um mistério a ser pensado, mas não um fim absoluto da razão.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Um fenómeno natural, estudável, sem significado metafísico.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 13
  {
    text: "Como lidas com críticas ou opiniões que discordam das tuas?",
    options: [
      { text: "Reflito sobre elas para ajustar minha autenticidade.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Vejo como oportunidades de questionar sistemas e valores existentes.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Avalio racionalmente, filtrando o que é coerente com a lógica.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Analiso seu impacto prático e científico.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 14
  {
    text: "O que te motiva a agir diariamente?",
    options: [
      { text: "A busca por significado pessoal e autenticidade.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "O desejo de desafiar normas e criar sentido próprio.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "A coerência lógica e princípios racionais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Resultados concretos e melhorias práticas para mim e para os outros.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 15
  {
    text: "Como defines uma vida bem-sucedida?",
    options: [
      { text: "Viver com autenticidade, explorando e compreendendo a própria psique.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Aceitar que a vida não tem sentido intrínseco e criar valor pessoalmente.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Agir segundo a razão, buscando virtude e coerência ética.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Maximizar benefícios tangíveis para si e para a comunidade.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
    // 16
  {
    text: "Como encaras tradições e costumes?",
    options: [
      { text: "Como referências, mas que podem ser questionadas para uma vida autêntica.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Como convenções que muitas vezes limitam a liberdade e devem ser reavaliadas.", category: "Niilismo", subCategory: "Anarquismo filosófico", color: "#f44336" },
      { text: "Como base para reflexão racional, mantendo apenas o que é coerente.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Como hábitos que podem ser otimizados com base em evidências e ciência.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
    // 17
  {
    text: "Qual é o valor da amizade e das relações humanas?",
    options: [
      { text: "Essencial para o crescimento pessoal e autodescoberta.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Significativa enquanto tiver sentido para nós; não é absoluta.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Importante, mas deve ser guiada por princípios racionais e morais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Valoriza-se pelo impacto positivo que gera no bem-estar coletivo.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
    // 18
  {
    text: "Como te relacionas com incertezas e imprevistos?",
    options: [
      { text: "Aceitando-os como parte da vida e oportunidade de crescimento.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Reconhecendo que nada é previsível e que precisamos adaptar valores constantemente.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Analisando racionalmente e aplicando lógica para minimizar riscos.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Buscando soluções práticas e cientificamente embasadas.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 19
  {
    text: "O que é coragem para ti?",
    options: [
      { text: "Encarar a própria liberdade e responsabilidade sem medo.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Aceitar a incerteza e a falta de garantias no mundo.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Agir de acordo com princípios racionais, mesmo diante de dificuldades.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Tomar decisões que tragam benefícios concretos, apesar de riscos.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
    // 20
  {
    text: "Como defines felicidade ou satisfação pessoal?",
    options: [
      { text: "Sentir-se alinhado com si mesmo e viver de forma autêntica.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Encontrar pequenos significados e prazeres em meio à ausência de sentido absoluto.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Alcançar coerência entre ações, pensamentos e princípios racionais.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Maximizar bem-estar e benefícios tangíveis para si e para outros.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  }
];

export default questions;