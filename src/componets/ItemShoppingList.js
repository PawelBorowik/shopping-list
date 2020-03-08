import React, { useState, useEffect } from 'react';
// import Item from './Item'

import '../style/App.css';

function ItemShopingList(props) {

    const [itemsFromForm, setItems] = useState([])
    const [warning, setWarning] = useState(false)



    // itm odnosi się do itemsFromForm ze state - zeby odwolać się do zmiennej poza useEffects, która moze być niedostepna

    useEffect(() => {
        if (props.newItem) {
            setItems(itm => [...itm, props.newItem])

        }
    }, [props.newItem])


    const handleBoughtItem = (indx) => {
        let hideBought = itemsFromForm.map((product, index) => {
            if (index === indx) product.bought = !product.bought;
            return product
        })
        setItems(hideBought)
    }
    const handleRemovetBoughtItem = (indx) => {
        let removeItem = itemsFromForm.filter((product, index) => index !== indx)
        setItems(removeItem)
    }
    const handleRemovetAllBoughtItem = () => {
        let removeAllBoughtItem = itemsFromForm.filter(product => !product.bought)
        setItems(removeAllBoughtItem)
    }

    const handleWarning = () => {
        setWarning(!warning)
    }

    const handleClearList = () => {
        console.log("klikkk")
        setItems([])
        handleWarning()
    }




    return (
        <div className="App">
            Lista zakupów
            <div className="delete-all-bought"
                onClick={() => handleRemovetAllBoughtItem()}>

                usun wszystkie kupione
            </div>

            <div className={`clear`}
                onClick={() => handleWarning()}>
                Wyczyśc liste zakupów
            </div>

            <div className={`abc ${warning ? "show-warning" : ""} `}>
                czy na pewno?
                <button onClick={() => handleClearList()}>tak</button>
                <button onClick={() => handleWarning()} >nie</button>
            </div>



            <ul>
                {itemsFromForm.map((item, indx) => {
                    return (
                        <li key={indx}>
                            <p className={`item ${item.checkbox ? "important" : ""} ${item.bought ? "bought" : ""}`}
                                onClick={() => handleBoughtItem(indx)}
                            >
                                {item.text}

                            </p>
                            <span onClick={() => handleRemovetBoughtItem(indx)}  >   x</span>

                        </li>
                    )
                })}
            </ul>
        </div >
    );
}

export default ItemShopingList;
