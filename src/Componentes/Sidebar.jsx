import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      <button
        className={styles.hamburguer}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <i className="bi bi-list"></i>
      </button>

      {menuAberto && (
        <div
          className={styles.overlay}
          onClick={fecharMenu}
        ></div>
      )}

      <aside
        className={`${styles.sidebar} ${
          menuAberto ? styles.aberto : ""
        }`}
      >
        <section className={styles.logo}>
          <div className={styles.logoIcon}>
            <Link to="/" onClick={fecharMenu}>
              <img
                src="/logoIR1.png"
                alt="Logo Instituto Recomeçar"
              />
            </Link>
          </div>

          <div className={styles.logoTexto}>
            Instituto
            <span>Recomeçar</span>
          </div>
        </section>

        <nav className={styles.menu}>
          <Link to="/" onClick={fecharMenu}>
            <i className="bi bi-house-door"></i>
            Inicio
          </Link>

          <Link to="/perfil" onClick={fecharMenu}>
            <i className="bi bi-person-circle"></i>
            Perfil
          </Link>

          <a href="#" onClick={fecharMenu}>
            <i className="bi bi-cart"></i>
            Carrinho
          </a>

          <a href="#" onClick={fecharMenu}>
            <i className="bi bi-cart-plus"></i>
            Catálogo
          </a>

          <a href="#" onClick={fecharMenu}>
            <i className="bi bi-box-seam"></i>
            Meus pedidos
          </a>

          
          <Link to="/Agenda_psicologo" onClick={fecharMenu}>
            <i className="bi bi-headphones"></i>
           Agendar com Psicologos
          </Link>
          <Link to="/Sobre_nos" onClick={fecharMenu}>
            <i className="bi bi-headphones"></i>
           sobre nos
          </Link>
            <Link to="/Parceiros" onClick={fecharMenu}>
            <i className="bi bi-headphones"></i>
           cursos Profissionalizantes
          </Link>

          <a href="#" onClick={fecharMenu}>
            <i className="bi bi-chat"></i>
            Mensagens
          </a>

          <Link to="/Suporte" onClick={fecharMenu}>
            <i className="bi bi-headphones"></i>
            Suporte
          </Link>
        </nav>

        <section className={styles.rodapeSidebar}>
          <button className={styles.botaoSair}>
            <i className="bi bi-box-arrow-left"></i>
            Sair
          </button>

          <div className={styles.usuario}>
            <img
              src="/ana.jpg"
              alt="Ana Paula"
              className={styles.fotoUsuario}
            />

            <div className={styles.dadosUsuario}>
              <span className={styles.nomeUsuario}>
                Ana luiza
              </span>

              <span className={styles.tipoUsuario}>
                Empreendedora
              </span>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}

export default Sidebar;
