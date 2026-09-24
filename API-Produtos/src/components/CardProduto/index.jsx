import "./cardProduto.css";

export default function CardProduto({ products }) {
  return (
    <div className="card-produto">
      <div className="card-imagem-container">
        <img src={products.thumbnail} alt={products.title} />
      </div>

      <div className="card-conteudo">
        <h3 className="card-titulo" title={products.title}>
          {products.title}
        </h3>

        <a href={`/produtos/${products.id}`}> Saiba Mais...</a>
      </div>
    </div>
  );
}