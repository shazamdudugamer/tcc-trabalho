import styles from "./Dashboardadm.module.css";
 
function Dashboardadm() {
  const dados = [
    {
      icone: "bi-eye",
      titulo: "Acessos",
      valor: "128",
      texto: "Este mês",
    },
    {
      icone: "bi-person-plus",
      titulo: "Novos cadastros",
      valor: "12",
      texto: "Este mês",
    },
    {
      icone: "bi-people",
      titulo: "Usuárias ativas",
      valor: "9",
      texto: "Atualmente",
    },
    {
      icone: "bi-person-heart",
      titulo: "Parceiros",
      valor: "4",
      texto: "Total",
    },
  ];
 
  return (
    <main className={styles.pagina}>
 
      <header className={styles.topo}>
        <div>
          <span>Administrador</span>
          <h1>Dashboard</h1>
        </div>
 
        <div className={styles.usuario}>
          <i className="bi bi-person-fill"></i>
          <button>
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </header>
 
 
      <section className={styles.conteudo}>
 
        <div className={styles.titulo}>
          <h2>Visão geral</h2>
          <p>
            Acompanhe os principais indicadores da plataforma.
          </p>
        </div>
 
 
        <section className={styles.cards}>
 
          {dados.map((item) => (
            <div className={styles.card} key={item.titulo}>
 
              <div className={styles.icone}>
                <i className={`bi ${item.icone}`}></i>
              </div>
 
              <div>
                <p>{item.titulo}</p>
                <strong>{item.valor}</strong>
                <small>{item.texto}</small>
              </div>
 
            </div>
          ))}
 
        </section>
 
 
        <section className={styles.resumo}>
 
          <h2>Resumo do período</h2>
 
          <div className={styles.numeros}>
 
            <div>
              <span>Acessos</span>
              <strong>128</strong>
            </div>
 
            <div>
              <span>Cadastros</span>
              <strong>12</strong>
            </div>
 
            <div>
              <span>Usuárias</span>
              <strong>9</strong>
            </div>
 
            <div>
              <span>Parceiros</span>
              <strong>4</strong>
            </div>
 
          </div>
 
        </section>
 
      </section>
 
    </main>
  );
}
 
export default Dashboardadm;