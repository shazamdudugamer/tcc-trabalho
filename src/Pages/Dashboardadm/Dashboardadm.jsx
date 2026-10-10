
import { Link } from "react-router-dom";
import styles from "./Dashboardadm.module.css";


function Dashboardadm(){

 return(

   <main className={styles.dashboard}>

      <header className={styles.topo}>

          <div>
               <span>Administrador</span>
                    <h1>Dashboard</h1>
                        </div>


                            <button className={styles.perfil}>
                                 <i className="bi bi-person"></i>
                                      Admin
                                          </button>

                                             </header>



                                                <section className={styles.conteudo}>


                                                    <h2>Visão geral</h2>


                                                        <div className={styles.cards}>


                                                             <div className={styles.card}>
                                                                   <i className="bi bi-eye"></i>
                                                                         <p>Acessos</p>
                                                                               <strong>128</strong>
                                                                                    </div>


                                                                                         <div className={styles.card}>
                                                                                               <i className="bi bi-people"></i>
                                                                                                     <p>Usuárias</p>
                                                                                                           <strong>3247</strong>
                                                                                                                </div>


                                                                                                                     <div className={styles.card}>
                                                                                                                           <i className="bi bi-book"></i>
                                                                                                                                 <p>Cursos</p>
                                                                                                                                       <strong>12</strong>
                                                                                                                                            </div>


                                                                                                                                                 <div className={styles.card}>
                                                                                                                                                       <i className="bi bi-heart"></i>
                                                                                                                                                             <p>Parceiros</p>
                                                                                                                                                                   <strong>4</strong>
                                                                                                                                                                        </div>


                                                                                                                                                                            </div>




                                                                                                                                                                                <h2 className={styles.tituloAcoes}>
                                                                                                                                                                                     Ações rápidas
                                                                                                                                                                                         </h2>



                                                                                                                                                                                             <div className={styles.acoes}>


                                                                                                                                                                                                  <Link to="/admin/usuarias">
                                                                                                                                                                                                        Usuárias
                                                                                                                                                                                                              <span>Gerenciar →</span>
                                                                                                                                                                                                                   </Link>


                                                                                                                                                                                                                        <Link to="/admin/psicologos">
                                                                                                                                                                                                                              Psicólogos
                                                                                                                                                                                                                                    <span>Gerenciar →</span>
                                                                                                                                                                                                                                         </Link>


                                                                                                                                                                                                                                              <Link to="/admin/verificacoes">
                                                                                                                                                                                                                                                    Verificações
                                                                                                                                                                                                                                                          <span>Analisar →</span>
                                                                                                                                                                                                                                                               </Link>


                                                                                                                                                                                                                                                                    <Link to="/admin/cursos">
                                                                                                                                                                                                                                                                          Cursos
                                                                                                                                                                                                                                                                                <span>Editar →</span>
                                                                                                                                                                                                                                                                                     </Link>


                                                                                                                                                                                                                                                                                          <Link to="/admin/vendas">
                                                                                                                                                                                                                                                                                                Vendas
                                                                                                                                                                                                                                                                                                      <span>Acompanhar →</span>
                                                                                                                                                                                                                                                                                                           </Link>


                                                                                                                                                                                                                                                                                                                <Link to="/admin/relatorios">
                                                                                                                                                                                                                                                                                                                      Relatórios
                                                                                                                                                                                                                                                                                                                            <span>Visualizar →</span>
                                                                                                                                                                                                                                                                                                                                 </Link>


                                                                                                                                                                                                                                                                                                                                     </div>




                                                                                                                                                                                                                                                                                                                                         <section className={styles.informacoes}>


                                                                                                                                                                                                                                                                                                                                              <div className={styles.verificacao}>

                                                                                                                                                                                                                                                                                                                                                    <h3>
                                                                                                                                                                                                                                                                                                                                                           Aguardando verificação
                                                                                                                                                                                                                                                                                                                                                                 </h3>


                                                                                                                                                                                                                                                                                                                                                                       <div>
                                                                                                                                                                                                                                                                                                                                                                              Mariana Silva
                                                                                                                                                                                                                                                                                                                                                                                     <button>
                                                                                                                                                                                                                                                                                                                                                                                             Verificar
                                                                                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                                                                                          </div>


                                                                                                                                                                                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                                                                                                                                                                                       Dr. Ricardo
                                                                                                                                                                                                                                                                                                                                                                                                                              <button>
                                                                                                                                                                                                                                                                                                                                                                                                                                      Verificar
                                                                                                                                                                                                                                                                                                                                                                                                                                             </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                   </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>



                                                                                                                                                                                                                                                                                                                                                                                                                                                             <div className={styles.sistema}>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Status do sistema
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Servidor: 24%
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Armazenamento: 68%
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </p>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <strong>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   🟢 Tudo operacional
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </strong>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </section>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </main>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default Dashboardadm;