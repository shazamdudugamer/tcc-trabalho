import styles from "./Parceiros.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const cursos = [
  {
    id: 1,
    categoria: "Negócios",
    titulo: "Empreendedorismo Digital para Iniciantes",
    duracao: "12h",
    avaliacao: "4.9",
    imagem: "/curso-empreendedorismo.jpg",
    progresso: 40,
    emAndamento: true,
  },
  {
    id: 2,
    categoria: "Marketing",
    titulo: "Marketing para Redes Sociais",
    duracao: "8h",
    avaliacao: "4.8",
    imagem: "/curso-marketing.jpg",
    emAndamento: false,
  },
  {
    id: 3,
    categoria: "Financeiro",
    titulo: "Finanças e Fluxo de Caixa",
    duracao: "15h",
    avaliacao: "5",
    imagem: "/curso-financeiro.jpg",
    emAndamento: false,
  },
];

function CursoCard({ curso }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagemContainer}>
        <img
          src={curso.imagem}
          alt={curso.titulo}
          className={styles.imagem}
        />

        <span className={styles.categoria}>
          {curso.categoria}
        </span>
      </div>

      <div className={styles.cardConteudo}>
        <h2>{curso.titulo}</h2>

        <div className={styles.informacoes}>
          <span>
            <i className="bi bi-clock"></i>
            {curso.duracao}
          </span>

          <span className={styles.avaliacao}>
            <i className="bi bi-star-fill"></i>
            <span>{curso.avaliacao}</span>
          </span>
        </div>

        {curso.emAndamento && (
          <div className={styles.progresso}>
            <div className={styles.progressoInfo}>
              <span>Progresso</span>
              <span>{curso.progresso}%</span>
            </div>

            <div className={styles.barra}>
              <div
                className={styles.barraPreenchida}
                style={{
                  width: `${curso.progresso}%`,
                }}
              />
            </div>
          </div>
        )}

        <button className={styles.botao}>
          <i className="bi bi-play"></i>

          {curso.emAndamento
            ? "Continuar Curso"
            : "Iniciar Agora"}
        </button>
      </div>
    </article>
  );
}

function Parceiros() {
  return (
    <div className={styles.pagina}>
      <Sidebar />

      <main className={styles.conteudoPrincipal}>
        <header className={styles.cabecalho}>
          <h1>Cursos Profissionalizantes</h1>

          <p>
            Aprimore suas habilidades e impulsione seu negócio
            com nossos cursos gratuitos.
          </p>
        </header>

        <section className={styles.gridCursos}>
          {cursos.map((curso) => (
            <CursoCard
              key={curso.id}
              curso={curso}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Parceiros;