import styles from "./Agenda_psicologos.module.css";
 
 
function Agenda_psicologo(){
 
const profissionais = [
 
  {
   nome:"Dra. Camila Mendes",
   area:"Psicologia Cognitivo-Comportamental",
   dias:"Segunda, Quarta e Sexta",
   imagem:"/img/camila.png"
  },
 
  {
   nome:"Dra. Juliana Oliveira",
   area:"Saúde Mental da Mulher",
   dias:"Terça e Quinta",
   imagem:"/img/juliana.png"
  }
 
];
 
 
return(
 
  <main className={styles.pagina}>
 
 
   <header className={styles.titulo}>
 
    <h1>
     Apoio Psicológico
    </h1>
 
    <p>
     Agende sessões gratuitas com nossas
     profissionais parceiras.
    </p>
 
   </header>
 
 
 
   <h2 className={styles.subtitulo}>
    Profissionais Disponíveis
   </h2>
 
 
 
   <section className={styles.cards}>
 
 
    {profissionais.map((p)=>(
 
     <div className={styles.card} key={p.nome}>
 
 
      <img
       src={p.imagem}
       alt={p.nome}
      />
 
 
      <h3>
       {p.nome}
      </h3>
 
 
      <p>
       {p.area}
      </p>
 
 
      <span>
       {p.dias}
      </span>
 
 
 
      <button>
       Agendar Sessão
      </button>
 
 
     </div>
 
 
    ))}
 
 
   </section>
 
 
  </main>
 
);
 
}
 
 
export default Agenda_psicologo;