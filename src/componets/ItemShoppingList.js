import React, { useState, useEffect } from 'react';
// import Item from './Item'

import '../style/App.css';

function ItemShopingList(props) {

    const [itemsFromForm, setItems] = useState([])


    // itm odnosi się do itemsFromForm ze state - zeby odwolać się do zmiennej poza useEffects, która moze być niedostepna

    useEffect(() => {
        if (props.newItem) {
            setItems(itm => [...itm, props.newItem])

        }
    }, [props.newItem])

    useEffect(() => {

    })
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
    const handleClearList = () => {


        setItems([])
    }


    return (
        <div className="App">
            Lista zakupów
            <div className="delete-all"
                onClick={() => handleRemovetAllBoughtItem()}
            >usun wszystkie kupione
            </div>
            <div className="clear-list"
                onClick={() => handleClearList()}
            >Wyczyśc liste zakupów
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
        </div>
    );
}

export default ItemShopingList;