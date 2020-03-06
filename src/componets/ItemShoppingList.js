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




    return (
        <div className="App">

            Lista zakupów
            <ul>
                {itemsFromForm.map((item, indx) => {
                    return (
                        <li key={indx}>
                            <h2 className={item.checkbox ? "important" : ""}>{item.text}</h2>

                        </li>
                    )


                })}

            </ul>

        </div>
    );
}

export default ItemShopingList;