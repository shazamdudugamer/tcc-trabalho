import styles from "./Parceiros.module.css";
import { listaCursos } from "../../Shared/Cursos";

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
              ></div>
            </div>
          </div>
        )}

        <button className={styles.botao}>
          <i className="bi bi-play-fill"></i>

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
    <main className={styles.conteudoPrincipal}>
      <header className={styles.cabecalho}>
        <h1>Cursos Profissionalizantes</h1>

        <p>
          Aprimore suas habilidades e impulsione seu negócio
          com nossos cursos gratuitos.
        </p>
      </header>

      <section className={styles.gridCursos}>
        {listaCursos.map((curso) => (
          <CursoCard
            key={curso.id}
            curso={curso}
          />
        ))}
      </section>
    </main>
  );
}

export default Parceiros;
