import "./cardProduto.css"

export default function CardFilme({products}) {
    return(
        <div className="wrapper-filme">
            <img src={products.thumbnail} alt="" />
            <h3>{products.titulo}</h3>
            <a href={`/filmes/${products.id}`}> Saiba Mais...</a>
        </div>
    )
}