const questions = [
  // 1
  {
    text: "Quando pensas no propósito da vida, és mais do tipo que inventa o teu próprio sentido ou acreditas que já existe algo maior a guiar-nos?",
    options: [
      { text: "O sentido não é dado, mas construído pelas escolhas livres e autênticas que fazemos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Não existe propósito inerente; o vazio revela a falência dos antigos valores.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "O propósito pode ser descoberto pela razão, pela busca de ordem e coerência universal.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "O sentido está no progresso científico e no impacto prático que podemos gerar no mundo.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 2
  {
    text: "Quando a vida te dá uma chapada, achas que o sofrimento é tipo um professor, uma piada cruel do universo, ou só mais um problema para resolver?",
    options: [
      { text: "É uma oportunidade para crescer e viver de forma mais autêntica.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "É a prova da absurdidade da vida e da fragilidade das crenças.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Deve ser compreendido e controlado pela razão.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Pode ser reduzido por avanços sociais e científicos.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
  // 3
  {
    text: "Olha à tua volta: porque é que tanta gente anda perdida, sem rumo? Achas que é medo da liberdade, falta de valores ou só excesso de redes sociais?",
    options: [
      { text: "Porque evitam encarar a liberdade e refugiam-se em papéis sociais.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Porque os valores coletivos são ilusórios e já não sustentam a vida.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Porque a sociedade deixou de ser guiada pela razão e pela verdade universal.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Porque confiam em crenças e tradições em vez de ciência e factos.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 4
  {
    text: "E a espiritualidade? Para ti é tipo um abraço no meio do caos, uma ilusão bonita, um diálogo sério com a razão... ou simplesmente não conta para nada?",
    options: [
      { text: "É uma escolha individual que pode ajudar a enfrentar o caos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "É uma ilusão criada para evitar o vazio; precisamos superá-la.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Deve dialogar com a razão, complementando-a.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "É irrelevante; o que importa é a ciência e a utilidade prática.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 5  
  {
    text: "Se tivesses de apostar: o verdadeiro conhecimento vem mais da tua experiência, da lógica pura, da ciência... ou achas que no fundo nunca sabemos nada com certeza?",
    options: [
      { text: "Da experiência vivida e subjetiva de cada um.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Não há conhecimento absoluto; tudo é relativo ou incerto.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Da razão pura e do pensamento lógico.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Da ciência e da observação empírica.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 6
  {
    text: "Quando falamos em 'bem', pensas logo em escolhas pessoais, numa verdade universal... ou achas que no fundo é tudo uma invenção humana?",
    options: [
      { text: "Cada um deve criar a sua própria ética através das escolhas livres.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "O 'bem' é uma construção ilusória; nada tem fundamento objetivo.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "O bem é universal, descoberto pela razão e pela lógica.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "O bem é o que gera melhores resultados para a sociedade.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
  // 7
  {
    text: "Para ti, ser livre é poder escolher sem desculpas, seguir a razão, usar a ciência para mudar o mundo... ou é só encarar o vazio sem limites?",
    options: [
      { text: "Escolher livremente, mesmo diante do peso da responsabilidade.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "A liberdade expõe o vazio da vida; nada limita, mas nada dá sentido.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Liberdade é agir de acordo com a razão universal.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Liberdade é poder aplicar o conhecimento científico para mudar a realidade.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 8
  {
    text: "Se tivesses de escolher um guia para a humanidade: ciência, espiritualidade... ou achas que nenhum dos dois faz realmente sentido?",
    options: [
      { text: "Nenhum guia fixo: cada pessoa deve decidir o caminho.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Nenhum guia é legítimo; todos são ilusões temporárias.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "A razão pode dialogar com a fé para buscar a verdade.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "A ciência é o único guia confiável.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 9
  {
    text: "E a tecnologia? Para ti é ferramenta de progresso, uma ilusão que nos distrai do vazio, ou algo que devia ser controlado por princípios universais?",
    options: [
      { text: "Uma ferramenta que só ganha valor conforme o uso autêntico que lhe damos.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Uma distração que mascara o vazio e a decadência.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Um fruto da razão que deve ser regulado por princípios universais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "O motor do progresso e da melhoria da vida.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 10
  {
    text: "Se tivesses de resumir o que nos torna humanos, escolherias a liberdade, o vazio, a razão ou a curiosidade científica?",
    options: [
      { text: "A liberdade de escolher e criar significado.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "A consciência do vazio e da falta de fundamento.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "A capacidade de raciocinar e buscar verdades universais.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "A curiosidade científica e a adaptação ao ambiente.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 11
  {
    text: "Se pudesses desenhar a sociedade do zero, farias dela um espaço de liberdade individual, de regras racionais universais, de ciência e progresso... ou acreditas que qualquer estrutura é sempre ilusória?",
    options: [
      { text: "Através da liberdade individual e da autenticidade.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Nenhuma estrutura é legítima; todas são transitórias.", category: "Niilismo", subCategory: "Anarquismo filosófico", color: "#f44336" },
      { text: "Guiada por princípios racionais e universais de justiça.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Estruturada em torno de ciência, ordem e progresso.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
  // 12
  {
    text: "Quando pensas na morte, vês nela um convite a viver com autenticidade, uma prova de que nada tem sentido, um mistério a ser pensado pela razão... ou apenas um fenómeno natural sem mais nada por trás?",
    options: [
      { text: "Um lembrete de viver de forma autêntica e responsável.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "A prova final de que nada tem sentido duradouro.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Um mistério a ser pensado, mas não um fim absoluto da razão.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Um fenómeno natural, estudável, sem significado metafísico.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 13
  {
    text: "Quando alguém critica as tuas ideias, costumas rever a tua autenticidade, questionar os valores, pesar tudo pela lógica... ou focas-te apenas no impacto prático da crítica?",
    options: [
      { text: "Reflito sobre elas para ajustar a minha autenticidade.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Vejo como oportunidades de questionar sistemas e valores existentes.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Avalio racionalmente, filtrando o que é coerente com a lógica.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Analiso o impacto prático e científico.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 14
  {
    text: "O que é que te faz levantar da cama todos os dias: a busca por sentido pessoal, desafiar normas, seguir princípios racionais... ou alcançar resultados concretos?",
    options: [
      { text: "A busca por significado pessoal e autenticidade.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "O desejo de desafiar normas e criar sentido próprio.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "A coerência lógica e princípios racionais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Resultados concretos e melhorias práticas para mim e para os outros.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 15
  {
    text: "Na tua cabeça, uma vida bem-sucedida é viver de forma autêntica, aceitar o vazio e criar valor, agir segundo a razão... ou maximizar benefícios para todos?",
    options: [
      { text: "Viver com autenticidade, explorando e compreendendo a própria psique.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Aceitar que a vida não tem sentido intrínseco e criar valor pessoalmente.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Agir segundo a razão, buscando virtude e coerência ética.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Maximizar benefícios tangíveis para si e para a comunidade.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
  // 16
  {
    text: "Quando pensas em tradições e costumes, vês neles algo a respeitar e reinterpretar, uma prisão que limita, uma base para reflexão racional... ou hábitos que podem ser otimizados pela ciência?",
    options: [
      { text: "Como referências, mas que podem ser questionadas para uma vida autêntica.", category: "Existencialismo", subCategory: "Romantismo", color: "#4caf50" },
      { text: "Como convenções que muitas vezes limitam a liberdade e devem ser reavaliadas.", category: "Niilismo", subCategory: "Anarquismo filosófico", color: "#f44336" },
      { text: "Como base para reflexão racional, mantendo apenas o que é coerente.", category: "Racionalismo", subCategory: "Iluminismo", color: "#2196f3" },
      { text: "Como hábitos que podem ser otimizados com base em evidências e ciência.", category: "Positivismo", subCategory: "Empirismo", color: "#ff9800" }
    ],
  },
  // 17
  {
    text: "E a amizade, para ti é motor de autodescoberta, um vínculo relativo, uma relação moral... ou algo valioso pelo impacto prático que tem no bem-estar?",
    options: [
      { text: "Essencial para o crescimento pessoal e autodescoberta.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Significativa enquanto tiver sentido para nós; não é absoluta.", category: "Niilismo", subCategory: "Ceticismo", color: "#f44336" },
      { text: "Importante, mas deve ser guiada por princípios racionais e morais.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Valoriza-se pelo impacto positivo que gera no bem-estar coletivo.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
  // 18
  {
    text: "Quando o inesperado acontece, aceitas como oportunidade, vês como sinal de vazio, analisas pela lógica... ou procuras logo uma solução prática?",
    options: [
      { text: "Aceitando-os como parte da vida e oportunidade de crescimento.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Reconhecendo que nada é previsível e que precisamos adaptar valores constantemente.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Analisando racionalmente e aplicando lógica para minimizar riscos.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Buscando soluções práticas e cientificamente embasadas.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 19
  {
    text: "O que é coragem, para ti: assumir a liberdade, encarar o vazio, manter-se fiel à razão... ou arriscar por resultados concretos?",
    options: [
      { text: "Encarar a própria liberdade e responsabilidade sem medo.", category: "Existencialismo", subCategory: "Fenomenologia", color: "#4caf50" },
      { text: "Aceitar a incerteza e a falta de garantias no mundo.", category: "Niilismo", subCategory: "Pessimismo", color: "#f44336" },
      { text: "Agir de acordo com princípios racionais, mesmo diante de dificuldades.", category: "Racionalismo", subCategory: "Estoicismo", color: "#2196f3" },
      { text: "Tomar decisões que tragam benefícios concretos, apesar de riscos.", category: "Positivismo", subCategory: "Pragmatismo", color: "#ff9800" }
    ],
  },
  // 20
  {
    text: "Se tivesse de definir felicidade, dirias que é viver autêntico, encontrar pequenos sentidos no vazio, alinhar ações com princípios... ou maximizar bem-estar concreto?",
    options: [
      { text: "Sentir-se alinhado com si mesmo e viver de forma autêntica.", category: "Existencialismo", subCategory: "Psicologia Analítica", color: "#4caf50" },
      { text: "Encontrar pequenos significados e prazeres em meio à ausência de sentido absoluto.", category: "Niilismo", subCategory: "Absurdismo", color: "#f44336" },
      { text: "Alcançar coerência entre ações, pensamentos e princípios racionais.", category: "Racionalismo", subCategory: "Humanismo Cristão Teológico", color: "#2196f3" },
      { text: "Maximizar bem-estar e benefícios tangíveis para si e para outros.", category: "Positivismo", subCategory: "Utilitarismo", color: "#ff9800" }
    ],
  },
];

export default questions;