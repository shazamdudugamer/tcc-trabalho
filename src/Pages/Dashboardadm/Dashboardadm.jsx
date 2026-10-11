import styles from "./Dashboardadm.module.css";


function Dashboardadm() {


 return (

  <main className={styles.conteudo}>


   <header className={styles.cabecalho}>


    <div className={styles.titulo}>

     <span>
      Administrador
     </span>

     <h1>
      Dashboard
     </h1>

    </div>




    <div className={styles.usuario}>


     <div className={styles.usuarioInfo}>

      <strong>
       Administrador
      </strong>

      <span>
       Painel ADM
      </span>

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


     <h2>
      Visão geral
     </h2>


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

       <span>
        Acessos
       </span>


       <strong>
        128
       </strong>


       <small>
        Este mês
       </small>


      </div>


     </div>







     <div className={styles.card}>


      <div className={`${styles.icone} ${styles.iconeRosa}`}>

       <i className="bi bi-person-plus-fill"></i>

      </div>



      <div className={styles.cardTexto}>


       <span>
        Novos cadastros
       </span>


       <strong>
        12
       </strong>


       <small>
        Este mês
       </small>


      </div>


     </div>







     <div className={styles.card}>


      <div className={`${styles.icone} ${styles.iconeVerde}`}>

       <i className="bi bi-people-fill"></i>

      </div>



      <div className={styles.cardTexto}>


       <span>
        Usuárias ativas
       </span>


       <strong>
        9
       </strong>


       <small>
        Atualmente
       </small>


      </div>


     </div>







     <div className={styles.card}>


      <div className={`${styles.icone} ${styles.iconeLaranja}`}>

       <i className="bi bi-person-heart"></i>

      </div>




      <div className={styles.cardTexto}>


       <span>
        Parceiros
       </span>


       <strong>
        4
       </strong>


       <small>
        Total
       </small>


      </div>


     </div>


    </div>





    <section className={styles.informacoes}>


     <div className={styles.infoBox}>


      <h2>
       Status da plataforma
      </h2>


      <p>
       Sistema funcionando normalmente.
      </p>


      <span>
       Última atualização: hoje
      </span>


     </div>





     <div className={styles.infoBox}>


      <h2>
       Atividades recentes
      </h2>


      <p>
       3 novas solicitações aguardando verificação.
      </p>


      <span>
       5 vendas realizadas este mês.
      </span>


     </div>


    </section>




   </section>


  </main>

 );

}


export default Dashboardadm;