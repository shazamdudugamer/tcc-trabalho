import styles from "./Parceiros.module.css";
import { listaCursos } from "../../Shared/Cursos";
 
 
function Parceiros(){
 
return(
 
  <main className={styles.pagina}>
 
   <header className={styles.titulo}>
 
    <h1>
     Cursos Profissionalizantes
    </h1>
 
    <p>
     Aprimore suas habilidades e desenvolva seu negócio.
    </p>
 
   </header>
 
 
   <section className={styles.cards}>
 
 
    {listaCursos.map((curso)=>(
 
     <div className={styles.card} key={curso.id}>
 
 
      <div className={styles.imagem}>
 
       <img
        src={curso.imagem}
        alt={curso.titulo}
       />
 
       <span>
        {curso.categoria}
       </span>
 
      </div>
 
 
 
      <div className={styles.conteudo}>
 
 
       <h2>
        {curso.titulo}
       </h2>
 
 
       <p>
        ⏱ {curso.duracao}
        {"  "}
       {curso.avaliacao}
       </p>
 
 
 
       {curso.emAndamento && (
 
        <>
        </>
 
       )}
 
 
 
       <button>
 
        {curso.emAndamento
        ? "Continuar Curso"
        : "Iniciar Agora"}
 
       </button>
 
 
      </div>
 
 
     </div>
 
    ))}
 
 
   </section>
 
 
  </main>
 
);
 
}
 
 
export default Parceiros;