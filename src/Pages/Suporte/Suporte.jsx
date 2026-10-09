import styles from "./Suporte.module.css";
 
function Suporte() {
 
const contatos = [
  {
   icone:"bi-chat",
   titulo:"Chat em Tempo Real",
   texto:"Fale com nossa equipe de suporte.",
   botao:"Abrir Chat"
  },
  {
   icone:"bi-envelope",
   titulo:"E-mail de Suporte",
   texto:"Envie suas dúvidas e receba ajuda.",
   botao:"Enviar E-mail"
  },
  {
   icone:"bi-whatsapp",
   titulo:"WhatsApp",
   texto:"Atendimento rápido pelo celular.",
   botao:"Chamar"
  }
];
 
 
return (
 
  <main className={styles.pagina}>
 
 
   <header className={styles.titulo}>
 
    <h1>
     Suporte e Canais de Contato
    </h1>
 
    <p>
     Estamos aqui para ajudar você quando precisar.
    </p>
 
   </header>
 
 
 
   <section className={styles.cards}>
 
 
    {contatos.map((item)=>(
 
     <div className={styles.card} key={item.titulo}>
 
 
      <div className={styles.icone}>
       <i className={`bi ${item.icone}`}></i>
      </div>
 
 
      <h2>
       {item.titulo}
      </h2>
 
 
      <p>
       {item.texto}
      </p>
 
 
      <button>
       {item.botao}
      </button>
 
 
     </div>
 
 
    ))}
 
 
   </section>
 
 
 
   <section className={styles.urgente}>
 
    <i className="bi bi-headset"></i>
 
    <div>
 
     <h2>
      Precisa de ajuda urgente?
     </h2>
 
     <p>
      Nossa equipe está disponível para auxiliar você.
     </p>
 
    </div>
 
 
    <button>
     Ligar Agora
    </button>
 
 
   </section>
 
 
  </main>
 
);
 
}
 
 
export default Suporte;