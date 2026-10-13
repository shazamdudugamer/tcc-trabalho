import styles from "./Relatorios.module.css";


function Relatorios(){

 const dados = [
  {
   titulo:"Usuárias cadastradas",
   numero:"3.247",
   crescimento:"+18%",
   icone:"bi bi-people"
  },

  {
   titulo:"Cursos realizados",
   numero:"856",
   crescimento:"+12%",
   icone:"bi bi-book"
  },

  {
   titulo:"Vendas realizadas",
   numero:"542",
   crescimento:"+25%",
   icone:"bi bi-cart"
  },

  {
   titulo:"Atendimentos psicológicos",
   numero:"324",
   crescimento:"+9%",
   icone:"bi bi-heart"
  }
 ];


 return(

 <main className={styles.pagina}>


  <header className={styles.cabecalho}>

   <span>Administrador</span>

   <h1>
    Relatórios e Estatísticas
   </h1>

   <p>
    Acompanhe o desempenho da plataforma.
   </p>

  </header>




  <section className={styles.cards}>


  {
   dados.map((item,index)=>(

    <article 
     className={styles.card}
     key={index}
    >

     <div className={styles.icone}>
      <i className={item.icone}></i>
     </div>


     <div>

      <span>
       {item.titulo}
      </span>


      <h2>
       {item.numero}
      </h2>


      <small>
       {item.crescimento} este mês
      </small>


     </div>


    </article>


   ))
  }


  </section>




  <section className={styles.grafico}>


   <h2>
    Crescimento mensal
   </h2>


   <div className={styles.linha}>


    <div>
     <span>Janeiro</span>
     <div className={styles.barra}>
      <div style={{width:"45%"}}></div>
     </div>
    </div>



    <div>
     <span>Fevereiro</span>
     <div className={styles.barra}>
      <div style={{width:"65%"}}></div>
     </div>
    </div>



    <div>
     <span>Março</span>
     <div className={styles.barra}>
      <div style={{width:"85%"}}></div>
     </div>
    </div>



   </div>


  </section>



 </main>

 );

}


export default Relatorios;