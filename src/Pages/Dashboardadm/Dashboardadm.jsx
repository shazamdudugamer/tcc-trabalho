import styles from "./Dashboardadm.module.css";
import { Link } from "react-router-dom";

function Dashboardadm() {
 return (
  <div className={styles.dashboard}>

   <aside className={styles.sidebarAdm}>

    <div className={styles.logo}>
     <img 
      src="/logoIR1.png"
      alt="Logo Instituto Recomeçar"
     />

     <div>
      <strong>Instituto</strong>
      <span>Recomeçar</span>
     </div>
    </div>


    <nav className={styles.menu}>

     <Link 
      to="/dashboardadm"
      className={`${styles.menuItem} ${styles.menuAtivo}`}
     >
      <i className="bi bi-grid-1x2-fill"></i>
      <span>Dashboard</span>
     </Link>


     <Link 
      to="/usuarias"
      className={styles.menuItem}
     >
      <i className="bi bi-people"></i>
      <span>Usuárias</span>
     </Link>


     <Link 
      to="/psicologos"
      className={styles.menuItem}
     >
      <i className="bi bi-person-heart"></i>
      <span>Psicólogos</span>
     </Link>


     <Link 
      to="/verificacoes"
      className={styles.menuItem}
     >
      <i className="bi bi-check-circle"></i>
      <span>Verificações</span>
     </Link>


     <Link 
      to="/relatorios"
      className={styles.menuItem}
     >
      <i className="bi bi-bar-chart"></i>
      <span>Relatórios</span>
     </Link>


     <Link 
      to="/configuracoes"
      className={styles.menuItem}
     >
      <i className="bi bi-gear"></i>
      <span>Configurações</span>
     </Link>


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
       <span>Painel ADM</span>
      </div>


      <div className={styles.avatar}>
       <i className="bi bi-person-fill"></i>
      </div>


      <button className={styles.botaoLogout}>
       <i className="bi bi-box-arrow-right"></i>
      </button>

     </div>

    </header>



    <section className={styles.areaDashboard}>


     <div className={styles.introducao}>
      <h2>Visão geral</h2>

      <p>
       Acompanhe os principais indicadores da plataforma.
      </p>
     </div>



     <div className={styles.cards}>


      <div className={styles.card}>
       <div className={`${styles.icone} ${styles.iconeRoxo}`}>
        <i className="bi bi-eye-fill"></i>
       </div>

       <div className={styles.cardTexto}>
        <span>Acessos</span>
        <strong>128</strong>
        <small>Este mês</small>
       </div>
      </div>



      <div className={styles.card}>
       <div className={`${styles.icone} ${styles.iconeRosa}`}>
        <i className="bi bi-person-plus-fill"></i>
       </div>

       <div className={styles.cardTexto}>
        <span>Novos cadastros</span>
        <strong>12</strong>
        <small>Este mês</small>
       </div>
      </div>



      <div className={styles.card}>
       <div className={`${styles.icone} ${styles.iconeVerde}`}>
        <i className="bi bi-people-fill"></i>
       </div>

       <div className={styles.cardTexto}>
        <span>Usuárias ativas</span>
        <strong>9</strong>
        <small>Atualmente</small>
       </div>
      </div>



      <div className={styles.card}>
       <div className={`${styles.icone} ${styles.iconeLaranja}`}>
        <i className="bi bi-person-heart"></i>
       </div>

       <div className={styles.cardTexto}>
        <span>Parceiros</span>
        <strong>4</strong>
        <small>Total</small>
       </div>
      </div>


     </div>




     <section className={styles.resumo}>

      <div className={styles.resumoCabecalho}>
       <div>
        <h2>Acesso rápido</h2>
        <p>
         Gerencie as principais áreas do sistema.
        </p>
       </div>
      </div>


      <div className={styles.resumoItens}>


       <Link 
        to="/usuarias"
        className={styles.resumoItem}
       >
        <span>Gerenciar</span>
        <strong>Usuárias</strong>
       </Link>



       <Link 
        to="/psicologos"
        className={styles.resumoItem}
       >
        <span>Gerenciar</span>
        <strong>Psicólogos</strong>
       </Link>



       <Link 
        to="/verificacoes"
        className={styles.resumoItem}
       >
        <span>Analisar</span>
        <strong>Verificações</strong>
       </Link>



       <Link 
        to="/relatorios"
        className={styles.resumoItem}
       >
        <span>Ver</span>
        <strong>Relatórios</strong>
       </Link>


      </div>

     </section>


    </section>


   </main>

  </div>
 );
}

export default Dashboardadm;