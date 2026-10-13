import styles from "./MonitoramentoVendas.module.css";


function MonitoramentoVendas(){

 const vendas = [

  {
   pedido:"ORD-9281",
   loja:"Ateliê da Bia",
   cliente:"Beatriz Santos",
   valor:"R$ 159,90",
   comissao:"R$ 15,99",
   status:"Concluído"
  },


  {
   pedido:"ORD-9280",
   loja:"Bordados Luana",
   cliente:"Daniela Lima",
   valor:"R$ 89,00",
   comissao:"R$ 8,90",
   status:"Processando"
  },


  {
   pedido:"ORD-9279",
   loja:"Ateliê da Bia",
   cliente:"Ana Paula Costa",
   valor:"R$ 210,00",
   comissao:"R$ 21,00",
   status:"Concluído"
  },


  {
   pedido:"ORD-9278",
   loja:"Loja da Tatá",
   cliente:"Elaine Rocha",
   valor:"R$ 45,50",
   comissao:"R$ 4,55",
   status:"Cancelado"
  },


  {
   pedido:"ORD-9277",
   loja:"Bordados Luana",
   cliente:"Bruna Oliveira",
   valor:"R$ 120,00",
   comissao:"R$ 12,00",
   status:"Concluído"
  }

 ];


 return(

 <main className={styles.container}>


  <header className={styles.topo}>


   <div>

    <h1>
     Monitoramento de Vendas
    </h1>

    <p>
     Acompanhe o fluxo financeiro e comissões (10%).
    </p>

   </div>



   <div className={styles.acoes}>

    <button>
     <i className="bi bi-calendar"></i>
     Março/2024
    </button>


    <button className={styles.exportar}>
     Exportar Relatório
    </button>

   </div>


  </header>





  <section className={styles.conteudo}>


   <div className={styles.tabela}>


    <div className={styles.cabecalhoTabela}>

     <span>Pedido</span>
     <span>Loja / Vendedora</span>
     <span>Total</span>
     <span>Comissão (10%)</span>
     <span>Status</span>

    </div>




    {
     vendas.map((venda,index)=>(

      <div 
       className={styles.linha}
       key={index}
      >


       <div>

        <strong>
         {venda.pedido}
        </strong>

        <small>
         hoje, 10:20
        </small>

       </div>



       <div>

        <strong>
         {venda.loja}
        </strong>

        <small>
         venda para {venda.cliente}
        </small>

       </div>




       <strong>
        {venda.valor}
       </strong>




       <strong className={styles.comissao}>
        {venda.comissao}
       </strong>




       <span 
        className={
         venda.status==="Cancelado"
         ? styles.cancelado
         :
         venda.status==="Processando"
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






   <aside className={styles.resumo}>


    <div className={styles.cardRoxo}>

     <span>
      Faturamento Marketplace
     </span>

     <strong>
      R$ 624.40
     </strong>

     <small>
      Volume total de vendas no mês
     </small>

    </div>





    <div className={styles.cardRoxo2}>

     <span>
      Receita Instituto (10%)
     </span>

     <strong>
      R$ 62.44
     </strong>

     <small>
      Valor disponível para reinvestimento
     </small>

    </div>





    <div className={styles.lojas}>


     <h2>
      Vendas por Loja
     </h2>


     <p>
      Ateliê da Bia
      <strong>R$ 369.90</strong>
     </p>


     <div className={styles.barra}>
      <span></span>
     </div>




     <p>
      Bordados Luana
      <strong>R$ 209.00</strong>
     </p>


     <div className={styles.barra}>
      <span></span>
     </div>




     <p>
      Loja da Tatá
      <strong>R$ 45.50</strong>
     </p>


     <div className={styles.barra}>
      <span></span>
     </div>


    </div>


   </aside>


  </section>


 </main>

 );

}


export default MonitoramentoVendas;