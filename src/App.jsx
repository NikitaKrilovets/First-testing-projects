import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard.jsx";

function App(){
    const [isOn, setIsOn] = useState(false);
    return(
        <div>
            <h1>{isOn ? "Включен" : "Выключен"}</h1>
            <button onClick={() => setIsOn(!isOn)}>Изменить состояние</button>

            <SecondApp />
        </div>
    )
}

function SecondApp(){
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log(counter);
    })
    return(
        <div>
            <h1>Счёт: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br></br>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <ThirdApp />
        </div>
    )
}

function ThirdApp(){
    const [hasMessage, setHasMessage] = useState(false);
    return(
        <div>
            <button onClick={() => setHasMessage(!hasMessage)}>Проверить сообщение</button>
            {hasMessage && <p>У вас новое сообщение!</p>}
            <ProductCardApp />
        </div>
    )
}

function ProductCardApp(){
    const products = [
    { id: 1, title: "Laptop", price: 30000 },
    { id: 2, title: "Phone", price: 20000 },
    { id: 3, title: "Headphones", price: 5000 },
    ];

    return(
        <div>
            {products.map(OurProduct => (
                <ProductCard
                    key={OurProduct.id}
                    title={OurProduct.title}
                    price={OurProduct.price}
                />
            ))}

            <FourthApp />
        </div>
    )
}

function FourthApp(){
    const [name, setName] = useState("");
    return(
        <div>
            <input 
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <p>Привет, {name}!</p>
        </div>
    )
}

export default App;
export {SecondApp};
export {ThirdApp};
export {ProductCardApp};
export {FourthApp};