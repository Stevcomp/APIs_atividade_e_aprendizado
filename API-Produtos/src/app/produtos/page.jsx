"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProdutos(data.products));
  }, []);

  return (
    <main>
      <h1><strong>Lista de Produtos</strong></h1>
      <div className="container-produtos">
        {produtos.map((p) => (
          <CardProduto key={p.id} products={p} />
        ))}
      </div>
    </main>
  );
}