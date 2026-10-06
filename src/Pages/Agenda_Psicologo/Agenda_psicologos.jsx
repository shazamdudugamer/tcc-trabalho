
import styles from "./Agenda_psicologos.module.css";
 
function Agenda_psicologo() {
 
  const profissionais = [
    {
      nome: "Dra. Camila Mendes",
      especialidade: "Psicologia Cognitivo-Comportamental",
      dias: "Seg, Qua, Sex",
      imagem: "/img/camila.png"
    },
    {
      nome: "Dra. Juliana Oliveira",
      especialidade: "Saúde Mental da Mulher",
      dias: "Ter, Qui",
      imagem: "/img/juliana.png"
    }
  ];
 
 
  return (
 
    <div className={styles.container}>
 

 
 
      <div className={styles.titulo}>
 
        <h1>
          Apoio Psicológico
        </h1>
 
        <p>
          Sua saúde mental é prioridade. Agende sessões gratuitas
          com nossas profissionais parceiras.
        </p>
 
      </div>
 
 
      <h2>
        Profissionais Disponíveis
      </h2>
 
 
      <div className={styles.cards}>
 
        {profissionais.map((p,index)=>(
 
          <div className={styles.card} key={index}>
 
            <img
              src={p.imagem}
              alt={p.nome}
              className={styles.foto}
            />
 
 
            <h3>
              {p.nome}
            </h3>
 
 
            <p className={styles.especialidade}>
              {p.especialidade}
            </p>
 
 
            <span>
              {p.dias}
            </span>
 
 
            <button className={styles.botao}>
              Agendar Sessão
            </button>
 
 
          </div>
 
        ))}
 
 
      </div>
 
 
    </div>
 
  );
}
 
 
export default Agenda_psicologo;