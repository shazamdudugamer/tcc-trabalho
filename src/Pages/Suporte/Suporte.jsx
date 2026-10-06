import styles from "./Suporte.module.css";
function Suporte() {
  return (
    <main className={styles.pagina}>
      <section className={styles.container}>
        <header className={styles.cabecalho}>
          <h1>Suporte e Canais de Contato</h1>

          <p>
            Estamos aqui para ajudar você em sua jornada.
            Escolha a melhor forma de falar conosco.
          </p>
        </header>

        <section className={styles.cards}>
          <article className={styles.card}>
            <div className={`${styles.icone} ${styles.chatIcon}`}>
              <i className="bi bi-chat"></i>
            </div>

            <h2>Chat em Tempo Real</h2>

            <p>
              Fale agora mesmo com uma
              <br />
              de nossas consultoras.
            </p>

            <button
              className={styles.botaoPrincipal}
              onClick={() => alert("O chat será iniciado em breve!")}
            >
              Abrir Chat
            </button>
          </article>

          <article className={styles.card}>
            <div className={`${styles.icone} ${styles.emailIcon}`}>
              <i className="bi bi-envelope"></i>
            </div>

            <h2>E-mail de Suporte</h2>

            <p>
              Envie suas dúvidas e
              <br />
              responderemos em até 24h.
            </p>

            <a
              href="mailto:suporte@institutorecomecar.com.br"
              className={styles.botaoSecundario}
            >
              Enviar E-mail
            </a>
          </article>

          <article className={styles.card}>
            <div className={`${styles.icone} ${styles.whatsappIcon}`}>
              <i className="bi bi-telephone"></i>
            </div>

            <h2>Central WhatsApp</h2>

            <p>
              Suporte rápido e prático direto
              <br />
              no seu celular.
            </p>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className={styles.botaoSecundario}
            >
              Chamar no Zap
            </a>
          </article>
        </section>

        <section className={styles.urgente}>
          <div className={styles.urgenteIcone}>
            <i className="bi bi-headset"></i>
          </div>

          <div className={styles.urgenteTexto}>
            <h2>Precisa de ajuda urgente?</h2>

            <p>
              Nossa central de acolhimento funciona 24 horas por dia.
            </p>
          </div>

          <a
            href="tel:+5511999999999"
            className={styles.botaoLigar}
          >
            Ligar Agora
          </a>
        </section>
      </section>
    </main>
  );
}

export default Suporte;