import styles from "./Verificacoes.module.css";


function Verificacoes(){

 const pedidos = [

  {
   nome:"Ana Souza",
   tipo:"Psicóloga",
   data:"Enviado hoje",
   status:"Pendente"
  },

  {
   nome:"Mariana Costa",
   tipo:"Empreendedora",
   data:"Enviado ontem",
   status:"Pendente"
  },

  {
   nome:"Lucas Ferreira",
   tipo:"Parceiro",
   data:"Enviado há 3 dias",
   status:"Pendente"
  }

 ];


 return(

  <main className={styles.pagina}>


   <header className={styles.topo}>

    <div>
     <span>Administrador</span>
     <h1>Central de Verificações</h1>
    </div>


   </header>



   <section className={styles.resumo}>


    <div>
     <strong>12</strong>
     <span>Solicitações pendentes</span>
    </div>


    <div>
     <strong>8</strong>
     <span>Aprovadas este mês</span>
    </div>


    <div>
     <strong>3</strong>
     <span>Recusadas</span>
    </div>


   </section>




   <section className={styles.lista}>


   {
    pedidos.map((pedido,index)=>(


     <article 
      className={styles.card}
      key={index}
     >


      <div className={styles.icone}>
       <i className="bi bi-person-check"></i>
      </div>



      <div className={styles.info}>

       <h2>
        {pedido.nome}
       </h2>


       <p>
        {pedido.tipo}
       </p>


       <small>
        {pedido.data}
       </small>

      </div>



      <span className={styles.status}>
       {pedido.status}
      </span>



      <div className={styles.acoes}>

       <button className={styles.aprovar}>
        Aprovar
       </button>


       <button className={styles.recusar}>
        Recusar
       </button>


      </div>



     </article>


    ))
   }


   </section>


  </main>

 );

}


export default Verificacoes;