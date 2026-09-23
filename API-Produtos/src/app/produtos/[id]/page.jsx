"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto";

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setListaProdutos(data.products);
            })
    });

    return (
        <main>
  {filme != null ? (
    <>
      <h1>Filme: {filme.titulo}</h1>

      <div className="conteudo-filme">
        <img src={products.thumbnail} alt="" />

        <div className="info-filme">
          <p><strong>Gêneros:</strong> {products.generos}</p>
          <p><strong>Ano de Lançamento:</strong> {products.ano}</p>
          <p><strong>Sinopse:</strong> {products.sinopse}</p>
          <p><strong>Tempo de Duração:</strong> {products.duracaoMinutos} min</p>
        </div>
      </div>
    </>
  ) : (
    listaProdutos.length > 0 && (
      <div className="container-filmes">
        {listaProdutos.map((p) => (
          <CardFilme key={p.id} produto={p} />
        ))}
      </div>
    )
  )}
</main>
    )
}




    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])