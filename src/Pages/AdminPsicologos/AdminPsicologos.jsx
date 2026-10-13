import styles from "./AdminPsicologos.module.css";

function AdminPsicologos() {

 const psicologos = [
  {
   nome: "Dr. Marcelo Vieira",
   area: "Trauma e Reabilitação",
   consultas: 42,
   membro: "2024",
   status: "Verificado",
   imagem: "/marcelo.jpg"
  },

  {
   nome: "Dra. Julia Mendes",
   area: "Ansiedade e Depressão",
   consultas: 28,
   membro: "2024",
   status: "Verificado",
   imagem: "/julia.jpg"
  },

  {
   nome: "Dr. Roberto Silva",
   area: "Terapia Cognitiva",
   consultas: 0,
   membro: "2024",
   status: "Pendente",
   imagem: "/roberto.jpg"
  },

  {
   nome: "Dra. Fernanda Lima",
   area: "Feminismo e Empoderamento",
   consultas: 15,
   membro: "2024",
   status: "Verificado",
   imagem: "/fernanda.jpg"
  }
 ];


 return (

  <main className={styles.container}>


   <header className={styles.topo}>

    <div>
     <h1>Gestão de Psicólogos</h1>
     <p>
      Monitore atendimentos e valide credenciais.
     </p>
    </div>


    <button className={styles.botaoNovo}>
     <i className="bi bi-person-plus"></i>
     Novo Psicólogo
    </button>

   </header>



   <section className={styles.cards}>


    {psicologos.map((psicologo,index)=>(

     <article 
      className={styles.card}
      key={index}
     >


      <img
       src={psicologo.imagem}
       alt={psicologo.nome}
       className={styles.avatar}
      />



      <h2>
       {psicologo.nome}
      </h2>


      <span className={styles.area}>
       {psicologo.area}
      </span>



      <span
       className={
        psicologo.status === "Pendente"
        ? styles.pendente
        : styles.verificado
       }
      >
       {psicologo.status}
      </span>




      <div className={styles.infos}>


       <div>
        <small>CONSULTAS</small>
        <strong>{psicologo.consultas}</strong>
       </div>


       <div>
        <small>MEMBRO</small>
        <strong>{psicologo.membro}</strong>
       </div>


      </div>



      <footer>

       <button>
        Perfil
       </button>

       <button className={styles.remover}>
        Remover
       </button>

      </footer>


     </article>

    ))}


   </section>


  </main>

 );

}


export default AdminPsicologos;