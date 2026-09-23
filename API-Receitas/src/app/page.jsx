"use client"
import "./globals.css"
import { useEffect, useState } from "react"
import CardReceitas from "@/components/cardReceitas";

export default function Receitas() {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [msgError, setMsgError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setListaReceitas(data.recipes);
        setMsgError("");
      })
      .catch((error) => setMsgError(error.message));
  }, []);

  return (
    <main className="main-container">
      <h1 className="titulo-pagina">Lista de Receitas</h1>
      
      {msgError && <p className="mensagem-erro">ERRO: {msgError}</p>}

      {listaReceitas.length > 0 ? (
        <div className="receitas-grid">
          {listaReceitas.map((receita) => (
            <CardReceitas
              key={receita.id}
              name={receita.name}
              image={receita.image}
              ingredients={receita.ingredients?.join(", ")}
              instructions={receita.instructions?.join(" ")}
              tags={receita.tags?.join(", ")}
            />
          ))}
        </div>
      ) : (
        <div className="mensagem-vazia">
          <p>Sem nenhuma receita por enquanto...</p>
        </div>
      )}
    </main>
  );
}