import styles from "./>Usuarias.module.css"
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreVertical,
  Search,
  Star
} from "lucide-react";
import styles from "./usuarias.module.css";

const usuarios = [
  {
    nome: "Camila Mendes",
    email: "camila@email.com",
    telefone: "(11) 98765-4321",
    localizacao: "São Paulo, SP",
    avaliacao: "4.8",
    status: "Ativo",
    imagem: ""
  },
  {
    nome: "Bruna Oliveira",
    email: "bruna@email.com",
    telefone: "(21) 99876-5432",
    localizacao: "Rio de Janeiro, RJ",
    avaliacao: "4.5",
    status: "Ativo",
    imagem: ""
  },
  {
    nome: "Luana Ferreira",
    email: "luana@email.com",
    telefone: "(31) 97654-3210",
    localizacao: "Belo Horizonte, MG",
    avaliacao: null,
    status: "Pendente",
    imagem: ""
  },
  {
    nome: "Tatiane Rocha",
    email: "tatiane@email.com",
    telefone: "(41) 98765-1234",
    localizacao: "Curitiba, PR",
    avaliacao: "4.9",
    status: "Ativo",
    imagem: ""
  },
  {
    nome: "Mariana Costa",
    email: "mariana@email.com",
    telefone: "(51) 96543-2109",
    localizacao: "Porto Alegre, RS",
    avaliacao: "4.7",
    status: "Ativo",
    imagem: ""
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda@email.com",
    telefone: "(61) 95432-1098",
    localizacao: "Brasília, DF",
    avaliacao: "4.2",
    status: "Inativo",
    imagem: ""
  },
  {
    nome: "Juliana Santos",
    email: "juliana@email.com",
    telefone: "(71) 94321-0987",
    localizacao: "Salvador, BA",
    avaliacao: "5.0",
    status: "Ativo",
    imagem: "9"
  }
];

function Usuarias() {
  const [busca, setBusca] = useState("");
  const [filtroAberto, setFiltroAberto] = useState(false);
  const [statusFiltro, setStatusFiltro] = useState("Todos");
  const [pagina, setPagina] = useState(1);

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((usuario) => {
      const termo = busca.toLowerCase().trim();

      const correspondeBusca =
        usuario.nome.toLowerCase().includes(termo) ||
        usuario.email.toLowerCase().includes(termo);

      const correspondeStatus =
        statusFiltro === "Todos" ||
        usuario.status === statusFiltro;

      return correspondeBusca && correspondeStatus;
    });
  }, [busca, statusFiltro]);

  const mudarBusca = (valor) => {
    setBusca(valor);
    setPagina(1);
  };

  return (
    <main className={styles.pagina}>
      <header className={styles.topo}>
        <div className={styles.tituloTopo}>
          <strong>Olá, Administrador</strong>
          <span>Painel de Controle</span>
        </div>

        <div className={styles.acoesTopo}>
          <button className={styles.notificacao}>
            <i className="bi bi-bell"></i>
            <span></span>
          </button>

          <button className={styles.admin}>
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Admin"
            />
            <span>Admin</span>
          </button>

          <button className={styles.sair}>
            <i className="bi bi-box-arrow-right"></i>
            Sair
          </button>
        </div>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.cabecalho}>
          <h1>Gestão de Usuárias</h1>

          <p>
            Visualize e gerencie todas as usuárias cadastradas na plataforma.
          </p>
        </div>

        <div className={styles.ferramentas}>
          <div className={styles.busca}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={busca}
              onChange={(e) => mudarBusca(e.target.value)}
            />
          </div>

          <button
            className={`${styles.filtro} ${
              filtroAberto ? styles.filtroAtivo : ""
            }`}
            onClick={() => setFiltroAberto(!filtroAberto)}
          >
            <Filter size={17} />
            Filtros
          </button>

          <button className={styles.exportar}>
            Exportar
          </button>
        </div>

        {filtroAberto && (
          <div className={styles.painelFiltro}>
            <label>Status</label>

            <select
              value={statusFiltro}
              onChange={(e) => {
                setStatusFiltro(e.target.value);
                setPagina(1);
              }}
            >
              <option value="Todos">Todos</option>
              <option value="Ativo">Ativo</option>
              <option value="Pendente">Pendente</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
        )}

        <section className={styles.tabela}>
          <div className={styles.cabecalhoTabela}>
            <span>USUÁRIA</span>
            <span>CONTATO</span>
            <span>LOCALIZAÇÃO</span>
            <span>AVALIAÇÃO</span>
            <span>STATUS</span>
            <span>AÇÕES</span>
          </div>

          {usuariosFiltrados.map((usuario) => (
            <div
              className={styles.linha}
              key={usuario.email}
            >
              <div className={styles.usuario}>
                <img
                  src={usuario.imagem}
                  alt={usuario.nome}
                />

                <div>
                  <strong>{usuario.nome}</strong>
                  <span>{usuario.email}</span>
                </div>
              </div>

              <div className={styles.contato}>
                {usuario.telefone}
              </div>

              <div className={styles.localizacao}>
                {usuario.localizacao}
              </div>

              <div className={styles.avaliacao}>
                {usuario.avaliacao ? (
                  <>
                    <Star
                      size={16}
                      fill="#ffb71b"
                      color="#ffb71b"
                    />
                    <strong>{usuario.avaliacao}</strong>
                  </>
                ) : (
                  <>
                    <Star
                      size={16}
                      color="#c7cbd1"
                    />
                    <strong>N/A</strong>
                  </>
                )}
              </div>

              <div>
                <span
                  className={`${styles.status} ${
                    usuario.status === "Ativo"
                      ? styles.ativo
                      : usuario.status === "Pendente"
                      ? styles.pendente
                      : styles.inativo
                  }`}
                >
                  {usuario.status}
                </span>
              </div>

              <button className={styles.acoes}>
                <MoreVertical size={18} />
              </button>
            </div>
          ))}

          {usuariosFiltrados.length === 0 && (
            <div className={styles.semResultado}>
              Nenhuma usuária encontrada.
            </div>
          )}

          <footer className={styles.rodapeTabela}>
            <span>
              Mostrando {usuariosFiltrados.length} de 3.247 usuárias
            </span>

            <div className={styles.paginacao}>
              <button
                disabled={pagina === 1}
                onClick={() => setPagina(1)}
              >
                <ChevronLeft size={15} />
                Anterior
              </button>

              <button
                disabled={pagina === 2}
                onClick={() => setPagina(2)}
              >
                Próxima
                <ChevronRight size={15} />
              </button>
            </div>
          </footer>
        </section>
      </section>
    </main>
  );
}

export default Usuarias;