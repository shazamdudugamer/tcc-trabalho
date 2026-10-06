import styles from "./Dashboardadm.module.css";

function Dashboardadm() {
  return (
    <div className={styles.dashboard}>
    
      <aside className={styles.sidebarAdm}>
   
        <div className={styles.logo}>
          <img
            src="/logoIR1.png"
            alt="Instituto Recomeçar"
          />

          <div>
            <strong>Instituto</strong>
            <span>Recomeçar</span>
          </div>
        </div>

       
        <nav className={styles.menu}>
          <a
            href="#"
            className={`${styles.menuItem} ${styles.menuAtivo}`}
          >
            <i className="bi bi-grid-1x2-fill"></i>
            <span>Dashboard</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-file-earmark-text"></i>
            <span>Páginas</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-people"></i>
            <span>Usuárias</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-person-heart"></i>
            <span>Parceiros</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-cart3"></i>
            <span>Vendas</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-headset"></i>
            <span>Suporte</span>
          </a>

          <a href="#" className={styles.menuItem}>
            <i className="bi bi-person-circle"></i>
            <span>Perfil</span>
          </a>
        </nav>

        <div className={styles.rodape}>
          <span>
            <i className="bi bi-shield-check"></i>
            Área administrativa
          </span>
        </div>
      </aside>

 
      <main className={styles.conteudo}>
   
        <header className={styles.cabecalho}>
          <div className={styles.titulo}>
            <span>Administrador</span>
            <h1>Dashboard</h1>
          </div>

          <div className={styles.usuario}>
            <div className={styles.usuarioInfo}>
              <strong>Administrador</strong>
              <span>Administrador</span>
            </div>

            <div className={styles.avatar}>
              <i className="bi bi-person-fill"></i>
            </div>

            <button
              className={styles.botaoLogout}
              title="Sair"
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </header>

      
        <section className={styles.areaDashboard}>
          <div className={styles.introducao}>
            <h2>Visão geral</h2>

            <p>
              Acompanhe os principais indicadores da
              plataforma.
            </p>
          </div>

        
          <div className={styles.cards}>
          
            <div className={styles.card}>
              <div
                className={`${styles.icone} ${styles.iconeRoxo}`}
              >
                <i className="bi bi-eye-fill"></i>
              </div>

              <div className={styles.cardTexto}>
                <span>Acessos</span>

                <strong>1.248</strong>

                <small>
                  <i className="bi bi-arrow-up"></i>
                  Acessos este mês
                </small>
              </div>
            </div>

            <div className={styles.card}>
              <div
                className={`${styles.icone} ${styles.iconeRosa}`}
              >
                <i className="bi bi-person-plus-fill"></i>
              </div>

              <div className={styles.cardTexto}>
                <span>Novos cadastros</span>

                <strong>86</strong>

                <small>
                  <i className="bi bi-arrow-up"></i>
                  Novas usuárias este mês
                </small>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboardadm;
