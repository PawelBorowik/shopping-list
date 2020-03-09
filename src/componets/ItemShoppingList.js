import React, { useState, useEffect } from 'react';
// import Item from './Item'

import '../style/App.css';

function ItemShopingList(props) {

    const [itemsFromForm, setItems] = useState([])
    const [warning, setWarning] = useState(false)
    const [selectItems, setSelectItems] = useState("all")



    // itm odnosi się do itemsFromForm ze state - zeby odwolać się do zmiennej poza useEffects, która moze być niedostepna

    useEffect(() => {
        if (props.newItem) {
            setItems(itm => [...itm, props.newItem])

        }
    }, [props.newItem])

    //obsługa wykreslenia produktu z listy
    const handleBoughtItem = (indx) => {
        let hideBought = itemsFromForm.map((product, index) => {
            if (index === indx) product.bought = !product.bought;
            return product
        })
        setItems(hideBought)
    }
    //obsługa przycisku usuwajacego produkt z listy
    const handleRemovetItemFromList = (indx) => {
        let removeItem = itemsFromForm.filter((product, index) => index !== indx)
        setItems(removeItem)
    }
    //obsluga przycisku usuwającego wszystkie kupione/wykreslone z listy produkty

    const handleRemovetAllBoughtItem = () => {
        let removeAllBoughtItem = itemsFromForm.filter(product => !product.bought)
        setItems(removeAllBoughtItem)
    }

    // funkcja wyswietlająca ostrzezenie przed usuniecem wszystkich elementów z listy

    const handleWarning = () => {
        setWarning(!warning)
    }

    //usuwanie listy zakupów

    const handleClearList = () => {

        setItems([])
        handleWarning()
    }
    // wybór przycisku okreslajacego rodzaj zakupw
    const handleKindOfProduct = options => {
        setSelectItems(options)

    }
    // const A = <li key={indx}>
    //     <p className={`list_item ${item.checkbox ? "important" : ""} ${item.bought ? "bought" : ""}`}
    //         onClick={() => handleBoughtItem(indx)}
    //     >
    //         {item.text}

    //     </p>
    //     <span className="list_delete-icon" onClick={() => handleRemovetItemFromList(indx)}  >   x</span>

    // </li>






    const showShopingList = () => {

        let shopingList = [...itemsFromForm]

        switch (selectItems) {
            case "all":


                return (
                    shopingList.map((item, indx) => {
                        return (
                            <li key={indx}>
                                <p className={`list_item ${item.checkbox ? "important" : ""} ${item.bought ? "bought" : ""}`}
                                    onClick={() => handleBoughtItem(indx)}
                                >
                                    {item.text}

                                </p>
                                <span className="list_delete-icon" onClick={() => handleRemovetItemFromList(indx)}  >   x</span>

                            </li>
                        )
                    })

                )
            case "food":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "food")
                return (
                    shopingList.map((item, indx) => {
                        return (
                            <li key={indx}>
                                <p className={`list_item ${item.checkbox ? "important" : ""} ${item.bought ? "bought" : ""}`}
                                    onClick={() => handleBoughtItem(indx)}
                                >
                                    {item.text}

                                </p>
                                <span className="list_delete-icon" onClick={() => handleRemovetItemFromList(indx)}  >   x</span>

                            </li>
                        )
                    })

                )
            // case "tools":
            //     shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "food")
            //     return shopingList.map((item, indx) => <A key={indx} indx={indx} item={item} />)


            default:
                return "jeszcze nie"

        }

    }










    return (
        <div className="list">
            Lista zakupów
            <div className="list_delete-all-bought"
                onClick={() => handleRemovetAllBoughtItem()}>

                usun wszystkie kupione
            </div>

            <div className="list_clear"
                onClick={() => handleWarning()}>
                Wyczyśc liste zakupów
            </div>

            <div className={`list_warning ${warning ? "show--warning" : ""} `}>
                czy na pewno?
                <button onClick={() => handleClearList()}>tak</button>
                <button onClick={() => handleWarning()} >nie</button>
            </div>

            <div className="list_select-kind">

                <button onClick={() => handleKindOfProduct("all")}  >wszystkie</button>
                <button onClick={() => handleKindOfProduct("food")}  >spozywcze</button>
                <button onClick={() => handleKindOfProduct("clothes")} >odziez</button>
                <button onClick={() => handleKindOfProduct("clean")}  >art chemichne</button>
                <button onClick={() => handleKindOfProduct("tools")}  >sprzet domowy</button>
                <button onClick={() => handleKindOfProduct("other")}  >inne</button>
            </div>



            <ul>
                {showShopingList()}
            </ul>
        </div >
    );
}

export default ItemShopingList;
