import CardProduto from "@/components/CardProduto";
import "./produto.css";

export default async function Produtos({ params }) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const produto = await res.json();

  return (
    <main>
      {produto != null ? (
        <>
          <h1>{produto.title}</h1>

          <div className="conteudo-produto">
            <img src={produto.thumbnail} alt="Imagem do Produto" />

            <div className="info-produto">
              <p><strong>Descrição:</strong> {produto.description}</p>
              <p><strong>Categoria:</strong> {produto.category}</p>
              <p><strong>Preço:</strong> R$ {produto.price}</p>
              <p><strong>Estoque:</strong> {produto.stock ?? "Não informado"}</p>
              <p><strong>Tags:</strong> {produto.tags || "Sem tags"}</p>
              <p><strong>Marca:</strong> {produto.brand || "Não informada"}</p>
              <p><strong>Data de Fabricação:</strong> {produto.date || "Não informada"}</p>
              <p><strong>Código de Barras:</strong> {produto.barcode || "Não informado"}</p>
            </div>
          </div>
        </>
      ) : (
        listaProdutos.length > 0 && (
          <div className="container-produtos">
            {listaProdutos.map((p) => (
              <CardProduto key={p.id} produto={p} />
            ))}
          </div>
        )
      )}
    </main>
  );
}