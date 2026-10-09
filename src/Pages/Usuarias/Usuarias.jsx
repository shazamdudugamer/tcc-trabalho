import { useState } from "react";
import styles from "./Usuarias.module.css";
 
function Usuarias() {
 
const lista = [
  {
   nome:"Camila Mendes",
   email:"camila@email.com",
   telefone:"(11) 98765-4321",
   cidade:"São Paulo - SP",
   nota:"4.8",
   status:"Ativo"
  },
  {
   nome:"Bruna Oliveira",
   email:"bruna@email.com",
   telefone:"(21) 99876-5432",
   cidade:"Rio de Janeiro - RJ",
   nota:"4.5",
   status:"Ativo"
  },
  {
   nome:"Luana Ferreira",
   email:"luana@email.com",
   telefone:"(31) 97654-3210",
   cidade:"Belo Horizonte - MG",
   nota:"N/A",
   status:"Pendente"
  },
  {
   nome:"Tatiane Rocha",
   email:"tatiane@email.com",
   telefone:"(41) 98765-1234",
   cidade:"Curitiba - PR",
   nota:"4.9",
   status:"Ativo"
  },
  {
   nome:"Fernanda Lima",
   email:"fernanda@email.com",
   telefone:"(61) 95432-1098",
   cidade:"Brasília - DF",
   nota:"4.2",
   status:"Inativo"
  }
];
 
 
const [busca,setBusca] = useState("");
const [filtro,setFiltro] = useState("Todos");
 
 
const usuarios = lista.filter((user)=>{
 
  const nome =
  user.nome.toLowerCase()
  .includes(busca.toLowerCase());
 
 
  const status =
  filtro === "Todos" ||
  user.status === filtro;
 
 
  return nome && status;
 
});
 
 
return (
 
<main className={styles.pagina}>
 
 
  <section className={styles.titulo}>
 
   <h1>Gestão de Usuárias</h1>
 
   <p>
   Visualize e gerencie as usuárias cadastradas.
   </p>
 
  </section>
 
 
 
  <div className={styles.ferramentas}>
 
   <input
    placeholder="Buscar usuária..."
    value={busca}
    onChange={(e)=>setBusca(e.target.value)}
   />
 
 
   <select
    value={filtro}
    onChange={(e)=>setFiltro(e.target.value)}
   >
 
    <option>Todos</option>
    <option>Ativo</option>
    <option>Pendente</option>
    <option>Inativo</option>
 
   </select>
 
 
  </div>
 
 
 
  <section className={styles.tabela}>
 
 
   <div className={styles.cabecalho}>
 
    <span>Usuária</span>
    <span>Contato</span>
    <span>Localização</span>
    <span>Avaliação</span>
    <span>Status</span>
 
   </div>
 
 
 
   {usuarios.map((user)=>(
 
    <div className={styles.linha} key={user.email}>
 
 
     <div>
      <strong>{user.nome}</strong>
      <small>{user.email}</small>
     </div>
 
 
     <span>
      {user.telefone}
     </span>
 
 
     <span>
      {user.cidade}
     </span>
 
 
     <span>
      ⭐ {user.nota}
     </span>
 
 
 
     <label
      className={
       user.status === "Ativo"
       ? styles.ativo
       :
       user.status === "Pendente"
       ? styles.pendente
       :
       styles.inativo
      }
     >
 
      {user.status}
 
     </label>
 
 
    </div>
 
   ))}
 
 
 
  </section>
 
 
</main>
 
);
 
}
 
 
export default Usuarias;