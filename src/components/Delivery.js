import car from "../assets/delivery/bus.png"
import "../styles/Delivery.css"

function Delivery() {
    return (
        <div className="delivery-section">
            <div className="rain">
                {[...Array(40)].map((_, i) => (
                    <span key={i} className="raindrop" style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${0.5 + Math.random()}s`,
                        animationDelay: `${Math.random()}s`,
                        height: `${10 + Math.random() * 10}px`
                    }} />
                ))}
            </div>

            <div className="road" />
            <div className="trail" />
            <img src={car} alt="delivery car" className="car" />
            <p className="delivery-text">Мгновенная доставка прямо к вам домой</p>
        </div>
    )
}

export default Delivery