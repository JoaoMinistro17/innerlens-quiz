const subCategoryMap = {
  Fenomenologia: {
    thinkers: [
      {
        name: "Edmund Husserl",
        image: "/persons/husserl.jpg",
        bio: "Filósofo alemão fundador da fenomenologia, focado na descrição rigorosa da experiência consciente.",
        quote: "Devemos retornar às próprias coisas, às experiências tal como se apresentam.",  
        
        intro: "Obra de introdução: 'Ideias para uma Fenomenologia Pura'",
        introBuy: "https://www.example.com/ideias-fenomenologia",
        
        main: "Obra mais influente: 'Meditações Cartesianas'",
        mainBuy: "https://www.example.com/meditacoes-cartesianas",
            mainAbout: "Nesta obra, Husserl desenvolve a ideia de redução fenomenológica, um método para suspender julgamentos sobre a existência do mundo externo e focar na análise da consciência. " +
            "Ele explora temas como a intencionalidade da consciência, a percepção e a temporalidade, estabelecendo as bases para a fenomenologia como uma disciplina filosófica rigorosa. " +
            "O livro é fundamental para entender a abordagem fenomenológica e sua influência em diversas áreas do pensamento filosófico."
      },
      {
        name: "Maurice Merleau-Ponty",
        image: "/persons/merleau-ponty.jpg",
        bio: "Filósofo francês que explorou a percepção corporal e a experiência vivida no mundo.",
        quote: "O corpo é nossa relação com o mundo.",
        
        intro: "Obra de introdução: 'Fenomenologia da Percepção'",
        introBuy: "https://www.example.com/fenomenologia-percepcao",
        
        main: "Obra mais influente: 'O Visível e o Invisível'",
        mainBuy: "https://www.example.com/o-visivel-e-o-invisivel",
            mainAbout: "Nesta obra, Merleau-Ponty aprofunda sua análise da percepção e da existência, explorando a relação entre o visível e o invisível, o corpo e o mundo. " +
            "Ele argumenta que a percepção não é apenas um ato passivo, mas uma interação dinâmica entre o sujeito e o objeto, mediada pelo corpo. " +
            "O livro é uma reflexão filosófica profunda sobre a natureza da experiência humana e a interconexão entre o ser e o mundo."
      },
    ],
  },
  Absurdismo: {
    thinkers: [
      {
        name: "Albert Camus",
        image: "/persons/camus.jpg",
        bio: "Filósofo e escritor francês que explorou o absurdo da existência e a busca por sentido.",
        quote: "O absurdo nasce do confronto entre o desejo humano por significado e a indiferença do universo.",
        
        intro: "Obra de introdução: 'O Mito de Sísifo'",
        introBuy: "https://www.example.com/o-mito-de-sisifo",
        
        main: "Obra mais influente: 'A Peste'",
        mainBuy: "https://www.example.com/a-peste",
            mainAbout: "Nesta obra, Camus narra a história de uma epidemia de peste que assola a cidade de Oran, na Argélia. " +
            "Através das experiências dos personagens, ele explora temas como o absurdo da existência, a solidariedade humana e a resistência diante do sofrimento. " +
            "O livro é uma reflexão profunda sobre a condição humana e a busca por sentido em um mundo indiferente."
      },
    ],
  },
  "Psicologia Analítica": {
    thinkers: [
      {
        name: "Carl C. Jung",
        image: "/persons/jung.jpg",
        bio: "Psiquiatra suíço que desenvolveu a teoria dos arquétipos e do inconsciente coletivo.",
        quote: "Quem olha para fora sonha, quem olha para dentro desperta.",
        
        intro: "Obra de introdução: 'O Homem e Seus Símbolos'",
        introBuy: "https://www.example.com/o-homem-e-seus-simbolos",
        
        main: "Obra mais influente: 'Memórias, Sonhos, Reflexões'",
        mainBuy: "https://www.example.com/memorias-sonhos-reflexoes",
            mainAbout: "Nesta obra autobiográfica, Jung explora sua jornada pessoal e profissional, oferecendo insights profundos sobre sua teoria dos arquétipos, o inconsciente coletivo e a individuação. " +
            "Ele compartilha suas experiências com sonhos, visões e encontros espirituais que moldaram sua compreensão da psique humana. " +
            "O livro é uma reflexão sobre a busca pelo autoconhecimento e a integração dos aspectos conscientes e inconscientes da mente."
      },
    ],
  },
  Romantismo: {
    thinkers: [
      {
        name: "Johann Wolfgang von Goethe",
        image: "/persons/goethe.jpg",
        bio: "Escritor e pensador alemão que destacou a importância da emoção e da subjetividade.",
        quote: "A obra de arte é a mediação entre o indivíduo e o infinito.",
        
        intro: "Obra de introdução: 'Fausto - Parte I'",
        introBuy: "https://www.example.com/fausto-parte1",
        
        main: "Obra mais influente: 'Fausto - Parte II'",
        mainBuy: "https://www.example.com/fausto-parte2",
            mainAbout: "Nesta obra, Goethe explora temas profundos como a busca pelo conhecimento, a dualidade da natureza humana e a luta entre o bem e o mal. " +
            "A narrativa segue a jornada de Fausto, um homem insatisfeito com sua vida, que faz um pacto com o diabo em troca de juventude e prazer. " +
            "Ao longo da história, Goethe aborda questões filosóficas sobre o sentido da vida, a redenção e a transcendência, tudo isso imerso em uma rica tapeçaria de simbolismo e poesia."
      },
      {
        name: "Friedrich Schlegel",
        image: "/persons/schlegel.jpg",
        bio: "Filósofo e crítico alemão, um dos fundadores do romantismo, enfatizou a arte e a imaginação.",
        quote: "A arte é a expressão mais alta do espírito humano.",
        
        intro: "Obra de introdução: 'Fragmentos Filosóficos'",
        introBuy: "https://www.example.com/fragmentos-filosoficos",
        
        main: "Obra mais influente: 'A Filosofia da História da Literatura'",
        mainBuy: "https://www.example.com/filosofia-historia-literatura",
            mainAbout: "Nesta obra, Schlegel explora a evolução da literatura e sua relação com a cultura e a história. " +
            "Ele argumenta que a literatura é um reflexo do espírito de uma época e que a compreensão das obras literárias requer uma análise profunda do contexto histórico e cultural em que foram produzidas. " +
            "Schlegel também discute a importância da imaginação e da criatividade na literatura, destacando o papel do autor como um mediador entre o mundo real e o mundo ideal."
      },
    ],
  },
  Pessimismo: {
    thinkers: [
      {
        name: "Arthur Schopenhauer",
        image: "/persons/schopenhauer.jpg",
        bio: "Filósofo alemão conhecido por sua visão pessimista da vida e pela ideia do 'vontade de viver' como força fundamental.",
        quote: "A vida é um negócio que não cobre suas despesas.",
        
        intro: "Obra de introdução ao autor: 'O Mundo como Vontade e Representação' (seções introdutórias)",
        introBuy: "https://www.planetadelivros.com.br/o-mundo-como-vontade-e-representacao-secoes-introdutorias/208748",
        
        main: "Obra mais influencial: 'O Mundo como Vontade e Representação'",
        mainBuy: "https://www.planetadelivros.com.br/o-mundo-como-vontade-e-representacao/208749",
            mainAbout: "Nesta obra, Schopenhauer apresenta a ideia de que o mundo fenomenal é a representação da Vontade, uma força irracional e cega que move todos os seres. " + 
            "O livro explora como o sofrimento é intrínseco à existência, como os desejos moldam a vida humana e como a arte, a compaixão e a contemplação filosófica podem oferecer algum alívio diante do pessimismo fundamental." + 
            "Essencialmente, é uma análise profunda da condição humana e da natureza da realidade sob a lente da Vontade."
      },
    ],
  },
  Ceticismo: {
    thinkers: [
      {
        name: "David Hume",
        image: "/persons/hume.jpg",
        bio: "Filósofo escocês que enfatizou empirismo, ceticismo e análise crítica do conhecimento.",
        quote: "A razão é e deve ser escrava das paixões.",
        
        intro: "Obra de introdução: 'Investigação sobre o Entendimento Humano'",
        introBuy: "https://www.example.com/investigacao-entendimento",
        
        main: "Obra mais influente: 'Tratado da Natureza Humana'",
        mainBuy: "https://www.example.com/tratado-natureza-humana",
            mainAbout: "Nesta obra, Hume examina a natureza da mente humana, argumentando que todo conhecimento deriva da experiência sensível. " +
            "Ele questiona a noção de causalidade, identidade pessoal e a existência do eu, propondo que nossas crenças são baseadas em hábitos e não em certezas racionais. " +
            "O livro é uma crítica profunda ao racionalismo e uma defesa do empirismo, influenciando significativamente a filosofia moderna."
      },
    ],
  },
  "Humanismo Cristão Teológico": {
    thinkers: [
      {
        name: "Tomás de Aquino",
        image: "/persons/aquino.jpg",
        bio: "Filósofo e teólogo medieval que integrou fé e razão na busca pelo entendimento do divino e da ética.",
        quote:
          "A fé e a razão são caminhos complementares para o conhecimento da verdade.",

        intro: "Obra de introdução: 'Suma Teológica (seleções)'",
        introBuy: "https://www.example.com/suma-teologica",

        main: "Obra mais influente: 'Suma Contra os Gentios'",
        mainBuy: "https://www.example.com/suma-contra-os-gentios",
            mainAbout: "Nesta obra, Tomás de Aquino apresenta argumentos racionais para a existência de Deus e explora a relação entre fé e razão. " +
            "Ele aborda temas como a criação, a providência divina, a natureza da alma e a moralidade, defendendo que a razão pode levar ao conhecimento de verdades religiosas. " +
            "O livro é uma síntese da filosofia aristotélica com a teologia cristã, sendo fundamental para o desenvolvimento do pensamento escolástico."
      },
      {
        name: "Santo Agostinho",
        image: "/persons/agostinho.jpg",
        bio: "Filósofo e teólogo cristão, refletiu sobre fé, moral e a busca por Deus na vida humana.",
        quote: "Não é tanto o que fazemos, mas o motivo pelo qual fazemos que determina a bondade ou a malícia.",
        
        intro: "Introdução: 'Confissões'",
        introBuy: "https://www.planetadelivros.com.br/confissoes/208740",
        
        main: "Obra mais influencial: 'A Cidade de Deus'",
        mainBuy: "https://www.planetadelivros.com.br/a-cidade-de-deus/208741",
            mainAbout: "Nesta obra, Agostinho responde às críticas pagãs ao cristianismo, defendendo a fé cristã como a verdadeira cidade de Deus em contraste com a cidade terrena. " +
            "Ele explora temas como a providência divina, o papel da graça e a natureza do mal, oferecendo uma visão abrangente da história humana sob a perspectiva cristã. " +
            "O livro é uma reflexão profunda sobre a relação entre o divino e o humano, influenciando significativamente a teologia cristã."
      },
    ],
  },
  Estoicismo: {
    thinkers: [
      {
        name: "Sêneca",
        image: "/persons/seneca.jpg",
        bio: "Filósofo romano que ensinou a cultivar virtudes e aceitar o que não se pode controlar.",
        quote: "Não é que temos pouco tempo, mas que perdemos muito dele.",
        
        intro: "Obra de introdução: 'Cartas a Lucílio'",
        introBuy: "https://www.example.com/cartas-lucilio",
        
        main: "Obra mais influente: 'Da Brevidade da Vida'",
        mainBuy: "https://www.example.com/da-brevidade-da-vida",
            mainAbout: "Nesta obra, Sêneca reflete sobre a natureza do tempo e a importância de usá-lo sabiamente. " +
            "Ele argumenta que a vida é curta, mas pode ser vivida plenamente se focarmos no presente e cultivarmos virtudes como a sabedoria, a coragem e a temperança. " +
            "O livro é um guia prático para viver uma vida significativa, alinhada com os princípios estoicos."
      },
      {
        name: "Epicteto",
        image: "/persons/epicteto.jpg",
        bio: "Filósofo romano que ensinou a viver em harmonia com a razão e aceitar o inevitável.",
        quote: "Não são as coisas que nos perturbam, mas a visão que temos delas.",
        
        intro: "Obra de introdução: 'Manual de Vida'",
        introBuy: "https://www.example.com/manual-de-vida",
        
        main: "Obra mais influente: 'Discursos'",
        mainBuy: "https://www.example.com/discursos",
            mainAbout: "Nesta obra, Epicteto apresenta uma série de ensinamentos práticos sobre como viver uma vida virtuosa e em harmonia com a natureza. " +
            "Ele enfatiza a importância de distinguir entre o que está sob nosso controle e o que não está, ensinando a aceitar com serenidade as adversidades da vida. " +
            "O livro é um guia para a prática do estoicismo, oferecendo conselhos sobre ética, autodomínio e a busca pela felicidade."
      },
      {
        name: "Marco Aurélio",
        image: "/persons/marco-aurelio.jpg",
        bio: "Imperador romano e filósofo estoico, escreveu sobre virtude, razão e autodomínio.",
        quote: "A felicidade depende de nós mesmos.",

        intro: "Obra de introdução: 'Meditações'",
        introBuy: "https://www.example.com/meditacoes",

        main: "Obra mais influente: 'Meditações'",
        mainBuy: "https://www.example.com/meditacoes",
            mainAbout: "Nesta obra, Marco Aurélio registra suas reflexões pessoais sobre a vida, a virtude e a natureza do universo. " +
            "Ele enfatiza a importância do autoconhecimento, da disciplina e da aceitação das circunstâncias externas. " +
            "O livro é um guia prático para viver de acordo com os princípios estoicos, oferecendo insights sobre como enfrentar desafios com serenidade e sabedoria."
      }
    ],
  },
  Iluminismo: {
    thinkers: [
      {
        name: "Immanuel Kant",
        image: "/persons/kant.jpg",
        bio: "Filósofo alemão que destacou razão, ética e autonomia como bases do conhecimento e moralidade.",
        quote:
          "Age de tal maneira que a máxima de tua ação possa se tornar lei universal.",
        
        intro: "Obra de introdução: 'Crítica da Razão Pura (seleções)'",
        introBuy: "https://www.example.com/critica-razao-pura",
        
        main: "Obra mais influente: 'Fundamentação da Metafísica dos Costumes'",
        mainBuy: "https://www.example.com/fundamentacao-metafisica",
            mainAbout: "Nesta obra, Kant estabelece os fundamentos da ética deontológica, argumentando que a moralidade deve ser baseada em princípios universais e não em consequências. " +
            "Ele introduz o conceito de imperativo categórico, que exige que as ações sejam avaliadas com base em sua capacidade de serem universalizadas. " +
            "O livro é uma reflexão profunda sobre a natureza da moralidade e a autonomia da razão prática."
      },
      {
        name: "Voltaire",
        image: "/persons/voltaire.jpg",
        bio: "Filósofo francês que defendeu liberdade de expressão, tolerância e racionalidade.",
        quote: "Não concordo com uma palavra do que dizes, mas defenderei até a morte o teu direito de dizê-lo.",

        intro: "Obra de introdução: 'Cartas Filosóficas'",
        introBuy: "https://www.example.com/cartas-filosoficas",

        main: "Obra mais influente: 'Cândido'",
        mainBuy: "https://www.example.com/candido",
            mainAbout: "Nesta obra satírica, Voltaire critica o otimismo filosófico e a injustiça social através das desventuras do jovem Cândido. " +  
            "Ele aborda temas como a guerra, a religião e a corrupção, promovendo a razão, a liberdade de pensamento e a tolerância. " +
            "O livro é uma reflexão mordaz sobre a condição humana e a busca por um mundo melhor."
      },
      {
        name: "Jean-Jacques Rousseau",
        image: "/persons/rousseau.jpg",
        bio: "Filósofo suíço que enfatizou a bondade natural do homem e a importância da liberdade e igualdade.",
        quote: "O homem nasce livre, e por toda parte encontra-se acorrentado.",
        
        intro: "Obra de introdução: 'Discurso sobre a Origem e os Fundamentos da Desigualdade entre os Homens'",
        introBuy: "https://www.example.com/discurso-origem-desigualdade",
        
        main: "Obra mais influente: 'O Contrato Social'",
        mainBuy: "https://www.example.com/o-contrato-social",
            mainAbout: "Nesta obra, Rousseau apresenta sua teoria política baseada na ideia de que a soberania reside no povo. " +
            "Ele argumenta que a liberdade individual deve ser harmonizada com a vontade geral, promovendo a igualdade e a justiça social. " +
            "O livro é um marco na filosofia política, influenciando movimentos democráticos e revolucionários ao longo da história."
      }
    ],
  },
  Pragmatismo: {
    thinkers: [
      {
        name: "Charles Sanders Peirce",
        image: "/persons/peirce.jpg",
        bio: "Filósofo e lógico americano, fundador do pragmatismo, enfatizou a importância da investigação científica.",
        quote: "A verdade é aquilo que funciona na prática.",
        
        intro: "Obra de introdução: 'Como Tornar Nossas Ideias Claras'",
        introBuy: "https://www.example.com/como-tornar-ideias-claras",
        
        main: "Obra mais influente: 'Pragmatismo e Pragmaticismo'",
        mainBuy: "https://www.example.com/pragmatismo-e-pragmaticismo",
            mainAbout: "Nesta obra, Peirce desenvolve os princípios do pragmatismo, argumentando que o significado de um conceito está ligado às suas consequências práticas. " +
            "Ele enfatiza a importância da investigação científica e do método experimental na busca pela verdade. " +
            "O livro é fundamental para entender a abordagem pragmática e sua influência na filosofia americana."
      },
      {
        name: "William James",
        image: "/persons/william-james.jpg",
        bio: "Filósofo e psicólogo americano que avaliou ideias pelo seu valor prático e impacto real.",
        quote: "O valor de uma ideia está em suas consequências práticas.",
        
        intro: "Obra de introdução: 'Pragmatismo: Um Novo Nome para Algumas Velhas Maneiras de Pensar'",
        introBuy: "https://www.example.com/pragmatismo",
        
        main: "Obra mais influente: 'As Variedades da Experiência Religiosa'",
        mainBuy: "https://www.example.com/variedades-experiencia",
            mainAbout: "Nesta obra, James explora a diversidade das experiências religiosas e sua influência na vida humana. " +
            "Ele argumenta que a religião deve ser avaliada com base em seus efeitos práticos na vida das pessoas, promovendo uma abordagem pluralista e inclusiva. " +
            "O livro é uma reflexão profunda sobre a natureza da fé e sua relação com a psicologia e a filosofia."
      },
    ],
  },
  Empirismo: {
    thinkers: [
      {
        name: "John Locke",
        image: "/persons/locke.jpg",
        bio: "Filósofo inglês que defendeu que todo conhecimento vem da experiência sensível.",
        quote: "A mente humana é uma tábula rasa.",
        
        intro: "Obra de introdução: 'Ensaio sobre o Entendimento Humano'",
        introBuy: "https://www.example.com/ensaio-entendimento",
        
        main: "Obra mais influente: 'Segundo Tratado sobre o Governo Civil'",
        mainBuy: "https://www.example.com/segundo-tratado-governo",
            mainAbout: "Nesta obra, Locke apresenta sua teoria política baseada na ideia de que o governo deve ser baseado no consentimento dos governados e na proteção dos direitos naturais à vida, liberdade e propriedade. " +
            "Ele argumenta contra o direito divino dos reis e defende a separação dos poderes, influenciando significativamente o desenvolvimento do liberalismo político. " +
            "O livro é um marco na filosofia política e na teoria do contrato social."
      },
      {
        name: "Francis Bacon",
        image: "/persons/bacon.jpg",
        bio: "Filósofo inglês que enfatizou método científico e observação empírica.",
        quote: "O conhecimento é poder.",

        intro: "Obra de introdução: 'Novum Organum'",
        introBuy: "https://www.example.com/novum-organum",

        main: "Obra mais influente: 'The Advancement of Learning'",
        mainBuy: "https://www.example.com/advancement-learning",
            mainAbout: "Nesta obra, Bacon defende a reforma do conhecimento científico através do método empírico e da observação sistemática. " +
            "Ele critica os métodos tradicionais de investigação e propõe uma abordagem baseada na experimentação e na coleta de dados. " +
            "O livro é fundamental para o desenvolvimento do método científico e da filosofia da ciência."
      },
    ],
  },
  Utilitarismo: {
    thinkers: [
      {
        name: "John Stuart Mill",
        image: "/persons/mill.jpg",
        bio: "Filósofo britânico que aprimorou o utilitarismo, enfatizando liberdade individual e bem-estar coletivo.",
        quote:
          "A liberdade de um deve ser limitada apenas para não prejudicar outro.",

        intro: "Obra de introdução: 'Utilitarismo'",
        introBuy: "https://www.example.com/utilitarismo",

        main: "Obra mais influente: 'Sobre a Liberdade'",
        mainBuy: "https://www.example.com/sobre-liberdade",
            mainAbout: "Nesta obra, Mill defende a importância da liberdade individual como um princípio fundamental para o progresso social e o bem-estar coletivo. " +
            "Ele argumenta que a liberdade deve ser protegida desde que não cause dano a outros, promovendo a diversidade de opiniões e estilos de vida. " +
            "O livro é uma reflexão profunda sobre os limites da autoridade e a importância da autonomia pessoal na sociedade."
      },
      {
        name: "Jeremy Bentham",
        image: "/persons/bentham.jpg",
        bio: "Filósofo inglês que fundou o utilitarismo, defendendo a maximização da felicidade como princípio moral.",
        quote: "O maior bem para o maior número.",

        intro: "Obra de introdução: 'Introdução aos Princípios da Moral e da Legislação'",
        introBuy: "https://www.example.com/introducao-principios",

        main: "Obra mais influente: 'Princípios da Moral e da Legislação'",
        mainBuy: "https://www.example.com/principios-moral-legislacao",
            mainAbout: "Nesta obra, Bentham apresenta os fundamentos do utilitarismo, argumentando que a moralidade deve ser baseada na maximização da felicidade e na minimização do sofrimento. " +  
            "Ele propõe um sistema de cálculo utilitarista para avaliar as consequências das ações, promovendo a ideia de que as leis e políticas públicas devem ser orientadas pelo bem-estar coletivo. " +
            "O livro é um marco na filosofia moral e política, influenciando significativamente o pensamento ético."   
      }
    ],
  },
  "Anarquismo filosófico": {
    thinkers: [
      {
        name: "Piotr Kropotkin",
        image: "/persons/kropotkin.jpg",
        bio: "Filósofo e geógrafo russo que defendeu liberdade máxima e auto-organização da sociedade.",
        quote: "A cooperação, não a competição, é a base da sociedade humana.",

        intro: "Obra de introdução: 'A Conquista do Pão'",
        introBuy: "https://www.example.com/conquista-pao",
        
        main: "Obra mais influente: 'Mutual Aid: A Factor of Evolution'",
        mainBuy: "https://www.example.com/mutual-aid",
            mainAbout: "Nesta obra, Kropotkin argumenta que a cooperação e a ajuda mútua são fatores essenciais na evolução das espécies, incluindo a humana. " +
            "Ele desafia a visão darwinista tradicional que enfatiza a competição, propondo que a solidariedade é uma força poderosa para o progresso social. " +
            "O livro é uma defesa apaixonada do anarquismo e da auto-organização, influenciando movimentos sociais e políticos ao redor do mundo."
      },
    ],
  },
};

export default subcategoryThinkers;
