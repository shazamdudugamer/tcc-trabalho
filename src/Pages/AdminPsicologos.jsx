import styles from "./AdminPsicologos.module.css";


function AdminPsicologos(){

 const psicologos = [

  {
   nome:"Dra. Camila Mendes",
   especialidade:"Psicologia Cognitivo-Comportamental",
   dias:"Seg, Qua e Sex",
   status:"Ativa"
  },

  {
   nome:"Dr. Ricardo Almeida",
   especialidade:"Saúde Mental",
   dias:"Ter e Qui",
   status:"Pendente"
  },

  {
   nome:"Dra. Juliana Oliveira",
   especialidade:"Psicologia Feminina",
   dias:"Seg e Sáb",
   status:"Ativa"
  }

 ];


 return(

  <main className={styles.pagina}>


   <header className={styles.cabecalho}>

    <div>
     <span>Administrador</span>
     <h1>Gestão de Psicólogos</h1>
    </div>


    <button>
     + Novo Psicólogo
    </button>


   </header>




   <section className={styles.cards}>


    {
     psicologos.map((psicologo,index)=>(


      <article 
       className={styles.card}
       key={index}
      >


       <div className={styles.foto}>
        <i className="bi bi-person"></i>
       </div>



       <h2>
        {psicologo.nome}
       </h2>


       <p>
        {psicologo.especialidade}
       </p>


       <span className={styles.dias}>
        {psicologo.dias}
       </span>



       <span 
       className={
        psicologo.status==="Ativa"
        ? styles.ativa
        : styles.pendente
       }
       >
        {psicologo.status}
       </span>



       <div className={styles.botoes}>

        <button>
         Editar
        </button>


        <button>
         Remover
        </button>


       </div>



      </article>


     ))
    }


   </section>


  </main>

 );

}


export default AdminPsicologos;