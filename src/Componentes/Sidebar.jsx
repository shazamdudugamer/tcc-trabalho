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

            <span>
              Recomeçar
            </span>


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





          <Link 
            to="/agenda-psicologo"
            onClick={fecharMenu}
          >

            <i className="bi bi-headset"></i>

            Agendar com Psicólogos

          </Link>





          <Link
            to="/sobre-nos"
            onClick={fecharMenu}
          >

            <i className="bi bi-info-circle"></i>

            Sobre nós

          </Link>





          <Link
            to="/parceiros"
            onClick={fecharMenu}
          >

            <i className="bi bi-mortarboard"></i>

            Cursos Profissionalizantes

          </Link>





          <a href="#" onClick={fecharMenu}>

            <i className="bi bi-chat"></i>

            Mensagens

          </a>





          <Link
            to="/suporte"
            onClick={fecharMenu}
          >

            <i className="bi bi-headphones"></i>

            Suporte

          </Link>







          {/* ÁREA ADMINISTRATIVA */}




          <Link
            to="/dashboardadm"
            onClick={fecharMenu}
          >

            <i className="bi bi-grid-fill"></i>

            Dashboard

          </Link>





          <Link
            to="/usuarias"
            onClick={fecharMenu}
          >

            <i className="bi bi-people"></i>

            Usuárias

          </Link>





          <Link
            to="/psicologos"
            onClick={fecharMenu}
          >

            <i className="bi bi-person-heart"></i>

            Psicólogos

          </Link>





          <Link
            to="/verificacoes"
            onClick={fecharMenu}
          >

            <i className="bi bi-check-circle"></i>

            Verificações

          </Link>





          <Link
            to="/monitoramento-vendas"
            onClick={fecharMenu}
          >

            <i className="bi bi-cart3"></i>

            Monitoramento de Vendas

          </Link>





          <Link
            to="/relatorios"
            onClick={fecharMenu}
          >

            <i className="bi bi-bar-chart"></i>

            Relatórios

          </Link>





          <Link
            to="/configuracoes"
            onClick={fecharMenu}
          >

            <i className="bi bi-gear"></i>

            Configurações

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
              alt="Ana Luiza"
              className={styles.fotoUsuario}
            />



            <div className={styles.dadosUsuario}>


              <span className={styles.nomeUsuario}>
                Ana Luiza
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