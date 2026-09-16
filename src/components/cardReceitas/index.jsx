import "./cardReceita.css";

export default function CardReceita({
    image,
    name,
    ingredients,
    instructions,
    tags,
}) {
    return (
        <div className="card-receita">
            <img className="card-image" src={image} alt="Imagem da receita" />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <div className="card-section">
                    <strong>Ingredientes:</strong>
                    <p>{ingredients}</p>
                </div>
                <div className="card-section">
                    <strong>Preparo:</strong>
                    <p>{instructions}</p>
                </div>
                {tags && <span className="card-tags">{tags}</span>}
            </div>
        </div>
    );
}