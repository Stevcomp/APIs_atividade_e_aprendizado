"use client";
import "./filme.css";
import { useState, useEffectEvent, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return (
        <main>
            {filme != null &&
                <>
                    <h1>Filme: {filme.titulo}</h1>

                    <div className="conteudo-filme">
                        <img src={filme.imagem} alt="" />

                        <div className="info-filme">
                            <p><strong>Gêneros:</strong> {filme.generos}</p>
                            <p><strong>Ano de Lançamento:</strong> {filme.ano}</p>
                            <p><strong>Sinopse:</strong> {filme.sinopse}</p>
                            <p><strong>Tempo de Duração:</strong> {filme.duracaoMinutos} min</p>
                        </div>
                    </div>
                </>}
        </main>
    )
}


