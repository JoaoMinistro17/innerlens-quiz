const subCategoryMap = {
  Fenomenologia: {
    thinkers: [
      {
        name: "Edmund Husserl",
        image: "/persons/husserl.jpg",
        bio: "Filósofo alemão fundador da fenomenologia, focado na descrição rigorosa da experiência consciente.",
        quote:
          "Devemos retornar às próprias coisas, às experiências tal como se apresentam.",
        intro: "Obra de introdução: 'Ideias para uma Fenomenologia Pura'",
        introBuy: "https://www.example.com/ideias-fenomenologia",
        main: "Obra mais influente: 'Meditações Cartesianas'",
        mainBuy: "https://www.example.com/meditacoes-cartesianas",
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
      },
    ],
  },
  Absurdismo: {
    thinkers: [
      {
        name: "Albert Camus",
        image: "/persons/camus.jpg",
        bio: "Filósofo e escritor francês que explorou o absurdo da existência e a busca por sentido.",
        quote:
          "O absurdo nasce do confronto entre o desejo humano por significado e a indiferença do universo.",
        intro: "Obra de introdução: 'O Mito de Sísifo'",
        introBuy: "https://www.example.com/o-mito-de-sisifo",
        main: "Obra mais influente: 'A Peste'",
        mainBuy: "https://www.example.com/a-peste",
      },
    ],
  },
  "Psicologia Analítica": {
    thinkers: [
      {
        name: "Carl Jung",
        image: "/persons/jung.jpg",
        bio: "Psiquiatra suíço que desenvolveu a teoria dos arquétipos e do inconsciente coletivo.",
        quote: "Quem olha para fora sonha, quem olha para dentro desperta.",
        intro: "Obra de introdução: 'O Homem e Seus Símbolos'",
        introBuy: "https://www.example.com/o-homem-e-seus-simbolos",
        main: "Obra mais influente: 'Memórias, Sonhos, Reflexões'",
        mainBuy: "https://www.example.com/memorias-sonhos-reflexoes",
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
      },
      {
        name: "Epicteto",
        image: "/persons/epicteto.jpg",
        bio: "Filósofo romano que ensinou a viver em harmonia com a razão e aceitar o inevitável.",
        quote:
          "Não são as coisas que nos perturbam, mas a visão que temos delas.",
        intro: "Obra de introdução: 'Manual de Vida'",
        introBuy: "https://www.example.com/manual-de-vida",
        main: "Obra mais influente: 'Discursos'",
        mainBuy: "https://www.example.com/discursos",
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
      },
      {
        name: "Voltaire",
        image: "/persons/voltaire.jpg",
        bio: "Filósofo francês que defendeu liberdade de expressão, tolerância e racionalidade.",
        quote:
          "Não concordo com uma palavra do que dizes, mas defenderei até a morte o teu direito de dizê-lo.",
        intro: "Obra de introdução: 'Cartas Filosóficas'",
        introBuy: "https://www.example.com/cartas-filosoficas",
        main: "Obra mais influente: 'Cândido'",
        mainBuy: "https://www.example.com/candido",
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
      },
      {
        name: "William James",
        image: "/persons/william-james.jpg",
        bio: "Filósofo e psicólogo americano que avaliou ideias pelo seu valor prático e impacto real.",
        quote: "O valor de uma ideia está em suas consequências práticas.",
        intro:
          "Obra de introdução: 'Pragmatismo: Um Novo Nome para Algumas Velhas Maneiras de Pensar'",
        introBuy: "https://www.example.com/pragmatismo",
        main: "Obra mais influente: 'As Variedades da Experiência Religiosa'",
        mainBuy: "https://www.example.com/variedades-experiencia",
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
      },
      {
        
      }
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
      },
    ],
  },
};

export default subcategoryThinkers;
