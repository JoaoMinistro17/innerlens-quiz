import { useState } from "react";
import Footer from "../components/Footer";
import questions from "../questions";
import topThinkers from "../categoryThinkers";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ category: null, subcategory: null })
  );
  const [showResults, setShowResults] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const handleAnswer = (category, subcategory) => {
    if (isAdvancing) return; // bloqueia cliques extras
    const updated = [...answers];
    updated[current] = { category, subcategory };
    setAnswers(updated);

    setIsAdvancing(true); // bloqueia durante 0.2s
    setTimeout(() => {
      setIsAdvancing(false);
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1); // pega o valor mais recente
      } else {
        setShowResults(true);
      }
    }, 200);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const calculateResults = () => {
    const counts = {
      Existencialismo: 0,
      Niilismo: 0,
      Racionalismo: 0,
      Positivismo: 0,
    };
    answers.forEach((a) => {
      if (a) counts[a.category]++;
    });
    const total = answers.filter(Boolean).length;
    return Object.entries(counts).map(([cat, count]) => ({
      category: cat,
      percent: ((count / total) * 100).toFixed(1),
      color:
        cat === "Existencialismo"
          ? "#4caf50"
          : cat === "Niilismo"
          ? "#f44336"
          : cat === "Racionalismo"
          ? "#2196f3"
          : cat === "Positivismo"
          ? "#ff9800"
          : "#9c27b0",
    }));
  };

  const calculateSubcategoryResults = () => {
    // Inicializa todas as subcategorias a 0
    const subCounts = {};
    questions.forEach((q) => {
      q.options.forEach((o) => {
        if (o.subCategory && !(o.subCategory in subCounts)) {
          subCounts[o.subCategory] = 0;
        }
      });
    });
    // Conta as respostas
    answers.forEach((a) => {
      if (a && a.subcategory) {
        subCounts[a.subcategory]++;
      }
    });
    // Calcula percentagens
    const total = answers.filter((a) => a && a.subcategory).length;
    return Object.entries(subCounts).map(([sub, count]) => ({
      subcategory: sub,
      percent: ((count / total) * 100).toFixed(1),
    }));
  };

  const topResult = () => {
    const results = calculateResults();
    return results.reduce(
      (max, r) => (parseFloat(r.percent) > parseFloat(max.percent) ? r : max),
      results[0]
    );
  };

  const resultExplanations = {
    Existencialismo:
      "Valorizas a liberdade individual, a autenticidade e a responsabilidade pessoal. Acreditas que o significado da vida é algo que cada pessoa deve criar por si mesma, enfrentando o absurdo e o sofrimento com coragem.",
    Niilismo:
      "Vês a vida como desprovida de significado inerente e questionas os valores tradicionais. Acreditas que é necessário desconstruir crenças antigas para encontrar uma nova forma de viver, mesmo que isso signifique enfrentar o vazio.",
    Racionalismo:
      "Areditas na importância do autoconhecimento profundo e na integração das partes conscientes e inconscientes da mente. Valorizas símbolos, mitos e arquétipos como ferramentas para entender a psique humana.",
    Positivismo:
      "Valorizas a fé, a compaixão e a ética baseada em princípios espirituais. Acreditas que o propósito da vida está ligado à conexão com o divino e à construção de uma sociedade justa e compassiva.",
  };

  return (
    <>
      <div
        style={{
          maxWidth: 1000,
          margin: "40px auto",
          fontFamily: "'Segoe UI', sans-serif",
          padding: "40px 40px",
          background: "linear-gradient(135deg, #e0f7fa 0%, #f3e5f5 100%)",
          borderRadius: "10%",
        }}
      >
        {!quizStarted ? (
          <div
            style={{
              maxWidth: 900,
              margin: "40px auto",
              fontFamily: "'Segoe UI', sans-serif",
              padding: "0 16px",
            }}
          >
            {/* Cabeçalho e descrição do quiz */}
            <h1
              style={{
                textAlign: "center",
                fontSize: "2.6em",
                marginBottom: "10px",
                letterSpacing: "2px",
                color: "#222",
                textShadow: "0 2px 12px #4caf5020",
              }}
            >
              <span role="img" aria-label="lens">
                🔮
              </span>{" "}
              InnerLens Quiz
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.15em",
                color: "#555",
                marginBottom: "28px",
                lineHeight: 1.7,
                background: "#fffbe7",
                borderRadius: "10px",
                padding: "16px 10px",
              }}
            >
              Descobre qual corrente filosófica mais ressoa com tua essência.
              <br />
              <span style={{ color: "#4caf50", fontWeight: 600 }}>
                Responde, reflete e recebe recomendações de pensadores e livros.
              </span>
            </p>

            {/* Instruções e botão de início */}
            <div
              style={{
                marginBottom: "32px",
                padding: "40px",
                background:
                  "linear-gradient(120deg, #f9fbe7 60%, #e3f2fd 100%)",
                borderRadius: "16px",
                boxShadow: "0 4px 18px #4caf5012, 0 1.5px 6px #2196f320",
                border: "1.5px solid #e0e0e0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 90,
                  height: 90,
                  background:
                    "radial-gradient(circle, #4caf5020 60%, transparent 100%)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />
              <h2
                style={{
                  marginBottom: "14px",
                  color: "#2196f3",
                  background: "#ffffffcc",
                  padding: "10px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.25em",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                💡 Descobre a tua lente interior
              </h2>
              <p
                style={{
                  lineHeight: 1.7,
                  color: "#333",
                  background: "#ffffffcc",
                  padding: "10px",
                  borderRadius: "16px",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                Cada uma das 20 perguntas foi desenhada para iluminar diferentes
                aspetos da tua visão de mundo.
                <br />
                Não existem respostas certas ou erradas — apenas reflexos da tua
                forma <b>única</b> de pensar.
                <br /> <br />
                No final, descobrirás qual das quatro grandes correntes
                filosóficas mais ressoa contigo:
                <br />
                Existencialismo, Niilismo, Racionalismo ou Positivismo.
              </p>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "32px",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <button
                  onClick={() => setQuizStarted(true)}
                  style={{
                    padding: "16px 38px",
                    fontSize: "1.15em",
                    borderRadius: "12px",
                    border: "none",
                    background:
                      "linear-gradient(90deg, #4caf50 60%, #2196f3 100%)",
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px #2196f340",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    transition: "all 0.5s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background =
                      "linear-gradient(90deg, #43a047 60%, #1976d2 100%)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background =
                      "linear-gradient(90deg, #4caf50 60%, #2196f3 100%)")
                  }
                >
                  Começar Quiz 🚀
                </button>
              </div>
            </div>

            {/* Honorable Mention */}
            <p style={{ color: "#444", fontSize: "1.08em", margin: "15px" }}>
              Se gostas deste ramo, vais adorar explorar o{" "}
              <a
                href="https://criticanarede.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Critica na Rede
              </a>{" "}
              — uma revista de filosofia.
            </p>
            {/* Manifesto InnerLens */}
            <div
              style={{
                padding: "24px",
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0 2px 12px #2196f320",
                border: "1.5px solid #e0e0e0",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.35em",
                  marginBottom: "12px",
                  color: "#ff9800",
                  fontWeight: 700,
                }}
              >
                🌌 Manifesto InnerLens
              </h2>
              <p style={{ lineHeight: 1.8, color: "#444", fontSize: "1.05em" }}>
                Vivemos numa era de abundância de informação, mas de escassez de
                significado.
                <br />
                Nunca tivemos tanto acesso a conhecimento, tecnologia e conforto
                — e, ainda assim, muitos sentem-se perdidos, vazios,
                desconectados de algo mais profundo.
                <br />
                <br />
                O InnerLens nasce para ser uma resposta a essa fome de sentido.
                <br />
                As grandes ideias da filosofia, psicologia e literatura não
                pertencem apenas a académicos, mas sim a todos que buscam
                compreender-se melhor, encontrar propósito e viver com mais
                clareza.
                <br />
                <br />
                Não quero dar respostas prontas. Quero abrir caminhos.
                <br />
                Um quiz, uma frase, um livro recomendado — pequenos convites
                que, juntos, formam um espelho: um espelho que devolve a cada
                pessoa uma visão mais nítida de quem é e do que pode vir a ser.
                <br />
                <br />
                O propósito é simples: trazer profundidade ao quotidiano,
                motivar a descoberta pessoal e inspirar a transformação.
                <br />
                <br />
                <span style={{ color: "#2196f3", fontWeight: 500 }}>
                  "Porque quando olhamos para dentro, despertamos" — Carl G.
                  Jung
                </span>
              </p>
            </div>
          </div>
        ) : !showResults ? (
          <div>
            <div
              style={{
                height: "10px",
                background: "#e0e0e0",
                borderRadius: "5px",
                overflow: "hidden",
                marginBottom: "24px",
                boxShadow: "0 1px 4px #4caf5010",
              }}
            >
              <div
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #4caf50 60%, #2196f3 100%)",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <h2
              style={{
                fontSize: "1.35em",
                marginBottom: "10px",
                color: "#222",
                letterSpacing: "1px",
              }}
            >
              Pergunta {current + 1}/{questions.length}
            </h2>
            <p
              style={{
                fontSize: "0.98em",
                color: "#777",
                marginBottom: "18px",
                fontWeight: 500,
              }}
            >
              {current < 8
                ? "(Parte 1 - Fundamentos Filosóficos)"
                : "(Parte 2 - Aplicações Modernas)"}
            </p>
            <p
              style={{
                marginBottom: "24px",
                lineHeight: 1.7,
                fontSize: "1.08em",
                color: "#333",
                background: "#fff",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0 1px 6px #2196f320",
              }}
            >
              {questions[current].text}
            </p>
            <div>
              {questions[current].options.map((o, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (current < questions.length - 1) {
                      handleAnswer(o.category, o.subCategory);
                    } else {
                      const updated = [...answers];
                      updated[current] = {
                        category: o.category,
                        subcategory: o.subCategory,
                      };
                      setAnswers(updated);
                    }
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    margin: "12px 0",
                    padding: "18px",
                    borderRadius: "14px",
                    border:
                      answers[current].category === o.category
                        ? `2.5px solid ${o.color}`
                        : "1.5px solid #bbb",
                    background:
                      answers[current].category === o.category
                        ? `${o.color}22`
                        : "#f9f9f9",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    textAlign: "left",
                    fontSize: "1.08em",
                    fontWeight: 500,
                    color: "#222",
                    boxShadow:
                      answers[current].category === o.category
                        ? `0 2px 10px ${o.color}22`
                        : "0 1px 4px #2196f310",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = `${o.color}18`)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background =
                      answers[current] === o.category
                        ? `${o.color}22`
                        : "#f9f9f9")
                  }
                >
                  {o.text}
                </button>
              ))}
            </div>
            <div
              style={{
                marginTop: "36px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                onClick={prevQuestion}
                disabled={answers[current] === null || current === 0}
                style={{
                  padding: "10px 22px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#ddd",
                  color: "#444",
                  cursor: current === 0 ? "not-allowed" : "pointer",
                  fontWeight: 500,
                  fontSize: "1em",
                }}
              >
                ← Anterior
              </button>
              {current < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  disabled={!answers[current].category}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "8px",
                    border: "none",
                    background:
                      answers[current].category === null
                        ? "#bbb"
                        : "linear-gradient(90deg, #4caf50 60%, #2196f3 100%)",
                    color: "#fff",
                    cursor:
                      answers[current].category === null
                        ? "not-allowed"
                        : "pointer",
                    fontWeight: 600,
                    fontSize: "1em",
                  }}
                >
                  Próxima →
                </button>
              ) : (
                <button
                  onClick={() => setShowResults(true)}
                  disabled={!answers[current].category}
                  style={{
                    padding: "10px 22px",
                    borderRadius: "8px",
                    border: "none",
                    background:
                      answers[current].category === null
                        ? "#bbb"
                        : "linear-gradient(90deg, #2196f3 60%, #4caf50 100%)",
                    color: "#fff",
                    cursor:
                      answers[current].category === null
                        ? "not-allowed"
                        : "pointer",
                    fontWeight: 600,
                    fontSize: "1em",
                  }}
                >
                  Enviar
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontSize: "2em",
                color: "#4caf50",
                letterSpacing: "1.5px",
                textShadow: "0 2px 10px #4caf5020",
              }}
            >
              📊 Resultado
            </h2>
            {calculateResults().map((r, i) => (
              <div key={i} style={{ margin: "16px 0" }}>
                <strong style={{ color: r.color, fontSize: "1.08em" }}>
                  {r.category}
                </strong>
                : {r.percent}%
                <div
                  style={{
                    height: "16px",
                    background: "#eee",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginTop: "7px",
                    boxShadow: "0 1px 4px #2196f320",
                  }}
                >
                  <div
                    style={{
                      width: `${r.percent}%`,
                      height: "100%",
                      background: r.color,
                      transition: "width 0.2s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Explicação básica da categoria */}
            <div
              style={{
                padding: "22px",
                background: "#f9fbe7",
                borderRadius: "12px",
                margin: "28px 0 18px 0",
                boxShadow: "0 2px 10px #4caf5012",
              }}
            >
              <h3
                style={{
                  marginBottom: "14px",
                  color: "#2196f3",
                  fontWeight: 700,
                  fontSize: "1.18em",
                }}
              >
                Corrente filosófica que mais te identifica:{" "}
                <span style={{ color: topResult().color }}>
                  {topResult().category}
                </span>
              </h3>
              <p style={{ lineHeight: 1.7, color: "#444", fontSize: "1.07em" }}>
                {resultExplanations[topResult().category]}
              </p>
            </div>

            {/* Resultados por subcategoria. */}
            <div
              style={{
                margin: "32px 0 18px 0",
                background: "#fffbe7",
                borderRadius: "12px",
                padding: "18px",
                position: "relative",
              }}
            >
              <h4 style={{ color: "#7e7e7eff", marginBottom: "12px" }}>
                Outras escolas de pensamento em destaque:
              </h4>
              {calculateSubcategoryResults()
                .sort((a, b) => parseFloat(b.percent) - parseFloat(a.percent))
                .map((r, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "8px",
                      filter: i === 0 ? "none" : "blur(4px)",
                      opacity: i === 0 ? 1 : 0.4,
                      pointerEvents: i === 0 ? "auto" : "none",
                      position: "relative",
                    }}
                  >
                    <strong>{r.subcategory}</strong>: {r.percent}%
                    <div
                      style={{
                        height: "10px",
                        background: "#eee",
                        borderRadius: "5px",
                        overflow: "hidden",
                        marginTop: "3px",
                      }}
                    >
                      <div
                        style={{
                          width: `${r.percent}%`,
                          height: "100%",
                          background: "#7e7e7eff",
                          transition: "width 0.2s",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              {/* Overlay para conteúdo bloqueado */}
              <div
                onClick={async () => {
                  try {
                    const res = await fetch(
                      "http://localhost:4242/create-checkout-session",
                      {
                        method: "POST",
                      }
                    );
                    const data = await res.json();
                    if (data.url) {
                      // abre o Stripe Checkout direto numa nova aba
                      window.open(data.url, "_blank");
                    } else {
                      alert("Erro ao criar sessão de pagamento");
                    }
                  } catch (err) {
                    alert("Erro ao comunicar com o servidor: " + err.message);
                  }
                }}
                style={{
                  display: "block",
                  position: "absolute",
                  top: 48, // ajuste conforme necessário
                  left: 0,
                  width: "100%",
                  height: `calc(100% - 48px)`,
                  zIndex: 10,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                    alt="Cadeado"
                    style={{
                      width: 38,
                      height: 38,
                      marginBottom: 8,
                      opacity: 0.8,
                    }}
                  />
                  <span
                    style={{
                      color: "#b8860b",
                      fontWeight: 700,
                      fontSize: "1.07em",
                      background: "#fffbeed0",
                      padding: "6px 18px",
                      borderRadius: "8px",
                      boxShadow: "0 1px 4px #bbb2",
                      textAlign: "center",
                    }}
                  >
                    Conteúdo bloqueado <br />
                    <span style={{ fontWeight: 400, fontSize: "0.97em" }}>
                      Desbloqueie com a versão premium
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Explicação básica da subcategoria */}
            <div
              style={{
                padding: "18px",
                background: "#f3e5f5",
                borderRadius: "12px",
                margin: "18px 0 28px 0",
                boxShadow: "0 2px 10px #2196f320",
              }}
            >
              <h4
                style={{
                  marginBottom: "12px",
                  color: "#9c27b0",
                  fontWeight: 700,
                  fontSize: "1.15em",
                }}
              >
                Escola de pensamento que mais te identifica:{" "}
                <span style={{ color: "#9c27b0" }}>
                  {
                    calculateSubcategoryResults().sort(
                      (a, b) => parseFloat(b.percent) - parseFloat(a.percent)
                    )[0].subcategory
                  }
                </span>
              </h4>
              <p style={{ lineHeight: 1.7, color: "#444", fontSize: "1.07em" }}>
                {/* Explicação genérica para subcategorias */}
                Cada subcategoria representa uma vertente específica dentro das
                grandes correntes filosóficas. Explorar essas escolas de
                pensamento pode oferecer insights adicionais sobre tua visão de
                mundo e aprofundar tua compreensão filosófica.
              </p>
            </div>

            {/* Pensadores recomendados */}
            <h3
              style={{
                textAlign: "center",
                marginBottom: "24px",
                fontSize: "1.8em",
                color: "#ff9800",
                letterSpacing: "1.2px",
                textShadow: "0 2px 10px #ff980020",
              }}
            >
              📚 Pensadores recomendados
            </h3>
            {topThinkers[topResult().category].thinkers.map((t, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "28px",
                  background: "#fff",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  border: "1.5px solid #e0e0e0",
                  borderRadius: "16px",
                  boxShadow: "0 4px 18px #2196f320, 0 1.5px 6px #2196f320",
                  position: "relative",
                  overflow: "hidden",
                  filter: i === 0 ? "none" : "blur(6px)",
                  opacity: i === 0 ? 1 : 0.4,
                  pointerEvents: i === 0 ? "auto" : "none",
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "40%",
                    objectFit: "cover",
                    marginBottom: "10px",
                    boxShadow: "0 2px 10px #4caf5020",
                  }}
                />
                <h4
                  style={{
                    marginBottom: "7px",
                    fontSize: "1.13em",
                    color: "#2196f3",
                    fontWeight: 700,
                  }}
                >
                  {t.name}
                </h4>
                <p
                  style={{
                    fontSize: "0.98em",
                    color: "#444",
                    marginBottom: "7px",
                    lineHeight: 1.5,
                  }}
                >
                  {t.bio}
                </p>
                <p
                  style={{
                    fontSize: "1.25em",
                    fontStyle: "italic",
                    color: "#888",
                    marginBottom: "13px",
                  }}
                >
                  "{t.quote}"
                </p>
                <p
                  style={{
                    fontSize: "0.93em",
                    fontStyle: "italic",
                    color: "#666",
                    marginBottom: "5px",
                  }}
                >
                  Obra de introdução ao autor: "{t.intro}"
                </p>
                <p
                  style={{ fontSize: "1em", fontWeight: "bold", color: "#222" }}
                >
                  Obra mais influente: "{t.main}"{" "}
                  {t.mainBuy && (
                    <>
                      -{" "}
                      <a
                        href={t.mainBuy}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#2196f3",
                          textDecoration: "underline",
                        }}
                      >
                        Comprar
                      </a>
                    </>
                  )}
                </p>
                <p
                  style={{ fontSize: "0.9em", color: "#555", marginTop: "8px" }}
                >
                  {t.mainAbout}
                </p>
              </div>
            ))}
            {/* Overlay para conteúdo bloqueado */}
            <div
              onClick={async () => {
                try {
                  const res = await fetch(
                    "http://localhost:4242/create-checkout-session",
                    {
                      method: "POST",
                    }
                  );
                  const data = await res.json();
                  if (data.url) {
                    // abre o Stripe Checkout direto numa nova aba
                    window.open(data.url, "_blank");
                  } else {
                    alert("Erro ao criar sessão de pagamento");
                  }
                } catch (err) {
                  alert("Erro ao comunicar com o servidor: " + err.message);
                }
              }}
              style={{
                display: "block",
                position: "absolute",
                top: 2000, // ajuste conforme necessário
                left: 0,
                width: "100%",
                height: `calc(100% - 48px)`,
                zIndex: 10,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                  alt="Cadeado"
                  style={{
                    width: 38,
                    height: 38,
                    marginBottom: 8,
                    opacity: 0.8,
                  }}
                />
                <span
                  style={{
                    color: "#b8860b",
                    fontWeight: 700,
                    fontSize: "1.07em",
                    background: "#fffbeed0",
                    padding: "6px 18px",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px #bbb2",
                    textAlign: "center",
                  }}
                >
                  Conteúdo bloqueado <br />
                  <span style={{ fontWeight: 400, fontSize: "0.97em" }}>
                    Desbloqueie com a versão premium
                  </span>
                </span>
              </div>
            </div>

            {/* Botão para reiniciar o quiz */}
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button
                onClick={() => {
                  setQuizStarted(false);
                  setCurrent(0);
                  setAnswers(Array(questions.length).fill(null));
                  setShowResults(false);
                }}
                style={{
                  padding: "14px 32px",
                  fontSize: "1.08em",
                  borderRadius: "12px",
                  border: "none",
                  background:
                    "linear-gradient(90deg, #f44336 60%, #ff9800 100%)",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px #f4433620",
                  fontWeight: 600,
                  transition: "all 0.5s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #e53935 60%, #fbc02d 100%)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background =
                    "linear-gradient(90deg, #f44336 60%, #ff9800 100%)")
                }
              >
                Voltar ao início
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
