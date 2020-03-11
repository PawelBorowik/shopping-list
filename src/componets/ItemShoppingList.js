import React, { useState, useEffect } from 'react';
import Item from './Item'
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
    const handleBoughtItem = (id) => {
        let hideBought = itemsFromForm.map(product => {
            if (product.id === id) product.bought = !product.bought;
            return product
        })
        setItems(hideBought)
    }
    //obsługa przycisku usuwajacego produkt z listy
    const handleRemovetItemFromList = (id) => {
        let removeItem = itemsFromForm.filter((product) => product.id !== id)
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
    const showShopingList = () => {

        let shopingList = [...itemsFromForm]


        switch (selectItems) {
            case "all":
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
            case "food":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "food")
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
            case "clothes":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "clothes")
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
            case "clean":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "clean")
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
            case "tools":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "tools")
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
            case "other":
                shopingList = shopingList.filter(itemsSelect => itemsSelect.selectItem === "other")
                return shopingList.map(item => <Item
                    key={item.id} item={item}
                    handleBoughtItem={handleBoughtItem}
                    handleRemovetItemFromList={handleRemovetItemFromList} />)
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
