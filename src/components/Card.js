import "../styles/Card.css"

function Card({ title, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-img" />
            <div className="card-title">{title}</div>
        </div>
    )
}

export default Card