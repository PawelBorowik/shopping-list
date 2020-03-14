import React, { useState, useEffect } from 'react';
import Item from './Item'


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

    const showShopingList = (options) => {

        let shopingList = [...itemsFromForm]
        if (selectItems === options) {

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
                    return null

            }
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

            <div className="list_select-kind" >

                <div className="list_folder-all" onClick={() => handleKindOfProduct("all")}>
                    <div className={`button all ${selectItems === "all" ? "active" : null}`}>wszystkie</div>
                    <ul className={`list_table all-list ${selectItems === "all" ? "active" : null}`}>
                        wszystkie

                        {showShopingList("all")}
                    </ul>
                </div>
                <div className="list_folder-food" onClick={() => handleKindOfProduct("food")} >
                    <div className={`button food ${selectItems === "food" ? "active" : null}`}>spożywcze</div>
                    <ul className={`list_table food-list ${selectItems === "food" ? "active" : null}`}>
                        spozywcze

                        {showShopingList("food")}
                    </ul>
                </div>
                <div className="list_folder-clothes" onClick={() => handleKindOfProduct("clothes")}>
                    <div className={`button clothes ${selectItems === "clothes" ? "active" : null}`}>odzież</div>
                    <ul className={`list_table clothes-list ${selectItems === "clothes" ? "active" : null}`}>
                        odzież

                        {showShopingList("clothes")}
                    </ul>
                </div>
                <div className="list_folder-clean" onClick={() => handleKindOfProduct("clean")}>
                    <div className={`button clean ${selectItems === "clean" ? "active" : null}`}>art. chemiczne</div>
                    <div>
                        <ul className={`list_table clean-list ${selectItems === "clean" ? "active" : null}`}>
                            art chem
                            {showShopingList("clean")}
                        </ul>
                    </div>
                </div>
                <div className="list_folder-tools" onClick={() => handleKindOfProduct("tools")}>
                    <div className={`button tools ${selectItems === "tools" ? "active" : null}`} > sprzet domowy</div>
                    <ul className={`list_table tools-list ${selectItems === "tools" ? "active" : null}`}>
                        sprzet domowy
                        {showShopingList("tools")}
                    </ul>
                </div>

                <div className="list_folder-other" onClick={() => handleKindOfProduct("other")}>
                    <div className={`button other ${selectItems === "other" ? "active" : null}`}>inne</div>
                    <ul className={`list_table other-list ${selectItems === "other" ? "active" : null}`}>
                        inne
                        {showShopingList("other")}
                    </ul>
                </div>
            </div>



            {/* <table className="list_table">
                {showShopingList()}
            </table> */}
        </div >
    );
}

export default ItemShopingList;
