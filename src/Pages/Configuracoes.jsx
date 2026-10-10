import styles from "./Configuracoes.module.css";


function Configuracoes(){

 return(

  <main className={styles.pagina}>


   <header className={styles.cabecalho}>

    <span>Administrador</span>

    <h1>
     Configurações
    </h1>

    <p>
     Gerencie informações do administrador e da plataforma.
    </p>

   </header>




   <section className={styles.area}>


    <article className={styles.card}>

     <h2>
      Perfil do Administrador
     </h2>


     <div className={styles.perfil}>


      <div className={styles.avatar}>
       <i className="bi bi-person"></i>
      </div>


      <div>

       <h3>
        Administrador
       </h3>

       <p>
        administrador@institutorecomecar.com
       </p>

      </div>


     </div>


     <button>
      Editar Perfil
     </button>


    </article>





    <article className={styles.card}>


     <h2>
      Segurança
     </h2>


     <div className={styles.item}>

      <i className="bi bi-lock"></i>

      <span>
       Alterar senha
      </span>

      <button>
       Alterar
      </button>

     </div>



     <div className={styles.item}>

      <i className="bi bi-shield-check"></i>

      <span>
       Autenticação em duas etapas
      </span>

      <button>
       Ativar
      </button>

     </div>



    </article>






    <article className={styles.card}>


     <h2>
      Plataforma
     </h2>



     <label>
      Nome da plataforma
     </label>


     <input
      value="Instituto Recomeçar"
      readOnly
     />



     <label>
      E-mail de suporte
     </label>


     <input
      value="suporte@institutorecomecar.com"
      readOnly
     />



     <button>
      Salvar alterações
     </button>



    </article>



   </section>



  </main>

 );

}


export default Configuracoes;