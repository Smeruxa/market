import "./styles/App.css"
import Card from "./components/Card"
import Delivery from "./components/Delivery"
import img1 from "./assets/items/house-items.jpg"
import img2 from "./assets/items/phones.jpg"
import img3 from "./assets/items/components.png"
import img4 from "./assets/items/accesuares.jpg"
import img5 from "./assets/items/camera.jpg"
import img6 from "./assets/items/headphones.jpg"

function App() {
    return (
        <div>
            <div className="top-panel">
                <button onClick={() => window.open("https://github.com/Smeruxa")}>Smeruxa</button>
                <button>Добавить товар</button>
                <button>Текущий баланс: 200$</button>
                <button>Просмотреть корзину</button>
                <button className="order-button">Оформить заказ</button>
            </div>
            <div className="header">
                <div className="header-welcome">
                    <h1>Приветствуем в S-Shop</h1>
                    <p>Именно у нас вы можете найти:</p>
                    <p className="wrapped-text">Бытовые товары, смартфоны, комплектующие для компьютера, еда, предметы экстренной необходимости и многое другое!</p>
                </div>
                <div className="cards-items">
                    <Card title="Бытовые товары" image={img1} />
                    <Card title="Смартфоны" image={img2} />
                    <Card title="Комплектующие" image={img3} />
                    <Card title="Аксессуары" image={img4} />
                    <Card title="Камеры" image={img5} />
                    <Card title="Наушники" image={img6} />
                </div>
            </div>
            <Delivery />
        </div>
    )
}

export default App