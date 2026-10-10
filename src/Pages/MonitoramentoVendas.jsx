import styles from "./MonitoramentoVendas.module.css";

function MonitoramentoVendas() {

 const vendas = [
  {
   pedido:"ORD-9281",
   loja:"Ateliê da Bia",
   cliente:"Beatriz Santos",
   total:"R$ 159,90",
   comissao:"R$ 15,99",
   status:"Concluído"
  },
  {
   pedido:"ORD-9280",
   loja:"Bordados Luana",
   cliente:"Daniela Lima",
   total:"R$ 89,00",
   comissao:"R$ 8,90",
   status:"Processando"
  },
  {
   pedido:"ORD-9279",
   loja:"Ateliê da Bia",
   cliente:"Ana Paula Costa",
   total:"R$ 210,00",
   comissao:"R$ 21,00",
   status:"Concluído"
  },
  {
   pedido:"ORD-9278",
   loja:"Loja da Tatá",
   cliente:"Elaine Rocha",
   total:"R$ 45,50",
   comissao:"R$ 4,55",
   status:"Cancelado"
  }
 ];


 return (

 <main className={styles.container}>


  <header className={styles.topo}>

   <div>
    <span>Financeiro</span>
    <h1>Monitoramento de Vendas</h1>
    <p>
     Acompanhe vendas e comissões da plataforma.
    </p>
   </div>


   <button>
    <i className="bi bi-download"></i>
    Exportar relatório
   </button>

  </header>




  <section className={styles.area}>


   <div className={styles.tabela}>

    <h2>Pedidos recentes</h2>


    <div className={styles.linhaTitulo}>
     <span>Pedido</span>
     <span>Loja</span>
     <span>Total</span>
     <span>Comissão</span>
     <span>Status</span>
    </div>



    {
     vendas.map((venda,index)=>(

      <div 
       className={styles.linha}
       key={index}
      >

       <div>
        <strong>{venda.pedido}</strong>
        <small>{venda.cliente}</small>
       </div>

       <span>{venda.loja}</span>

       <span>{venda.total}</span>

       <span className={styles.comissao}>
        {venda.comissao}
       </span>


       <span 
        className={
         venda.status === "Cancelado"
         ? styles.cancelado
         :
         venda.status === "Processando"
         ? styles.processando
         :
         styles.concluido
        }
       >
        {venda.status}
       </span>


      </div>

     ))
    }


   </div>





   <aside className={styles.lateral}>


    <div className={styles.cardGrande}>

     <span>
      Faturamento Marketplace
     </span>

     <h2>
      R$ 624,40
     </h2>

     <p>
      Volume total de vendas no mês
     </p>

    </div>




    <div className={styles.cardGrande}>

     <span>
      Receita Instituto
     </span>

     <h2>
      R$ 62,44
     </h2>

     <p>
      Comissão recebida
     </p>

    </div>




    <div className={styles.lojas}>

     <h3>
      Vendas por Loja
     </h3>


     <div>
      Ateliê da Bia
      <strong>
       R$ 369,90
      </strong>
     </div>


     <div>
      Bordados Luana
      <strong>
       R$ 209,00
      </strong>
     </div>


     <div>
      Loja da Tatá
      <strong>
       R$ 45,50
      </strong>
     </div>


    </div>



   </aside>


  </section>


 </main>

 )

}


export default MonitoramentoVendas;