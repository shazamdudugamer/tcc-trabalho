import styles from "./Verificacoes.module.css";


function Verificacoes(){

 const solicitacoes = [

  {
   nome:"Mariana Silva",
   tipo:"Empreendedora",
   tempo:"Solicitação enviada em Há 2h",
   proposta:"Plano de negócio: Artesanato em crochê sustentável.",
   documentos:[
    "RG Frontal",
    "Comprovante de Residência",
    "Plano de Negócios"
   ],
   imagem:"/mariana.jpg"
  },


  {
   nome:"Dr. Ricardo Santos",
   tipo:"Psicólogo",
   tempo:"Solicitação enviada em Há 5h",
   proposta:"Especialista em traumas. CRP: 06/123456",
   documentos:[
    "Diploma Graduação",
    "Carteira CRP Ativa",
    "Certificado Especialização"
   ],
   imagem:"/ricardo.jpg"
  }


 ];



 return(

  <main className={styles.container}>


   <header className={styles.topo}>

    <div>

     <h1>
      Central de Verificações
     </h1>

     <p>
      Valide identidades, registros profissionais e planos de negócio.
     </p>

    </div>



    <span className={styles.pendentes}>
     3 Pendentes
    </span>


   </header>






   <section className={styles.lista}>


    {
     solicitacoes.map((item,index)=>(


      <article 
       className={styles.card}
       key={index}
      >


       <div className={styles.usuario}>


        <img
         src={item.imagem}
         alt={item.nome}
        />


        <div>

         <h2>
          {item.nome}

          <span>
           {item.tipo}
          </span>

         </h2>


         <p>
          {item.tempo}
         </p>

        </div>


       </div>







       <div className={styles.informacoes}>


        <div className={styles.proposta}>


         <h3>
          DETALHES DA PROPOSTA
         </h3>


         <div className={styles.caixa}>

          {item.proposta}

         </div>


        </div>





        <div className={styles.documentos}>


         <h3>
          DOCUMENTOS ANEXADOS
         </h3>


         {
          item.documentos.map((doc,i)=>(

           <div 
            className={styles.documento}
            key={i}
           >

            <i className="bi bi-file-earmark-text"></i>

            <span>
             {doc}
            </span>


            <i className="bi bi-box-arrow-up-right"></i>

           </div>

          ))
         }


        </div>


       </div>







       <aside className={styles.acoes}>


        <button className={styles.aprovar}>
         <i className="bi bi-check-circle"></i>
         Aprovar
        </button>



        <button className={styles.recusar}>
         <i className="bi bi-x"></i>
         Recusar
        </button>



        <button className={styles.ajustes}>
         Solicitar Ajustes
        </button>


       </aside>



      </article>


     ))
    }


   </section>


  </main>

 );

}


export default Verificacoes;