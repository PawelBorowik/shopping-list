import React, { useState, useEffect } from 'react';
import Item from './Item'
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


//customizacja domyślnego kolory primar na własny
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b11adc'
        }
    },
});

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

    // select okreslajacy rodzaj zakupw
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
    //liczniki ilości produktów na kartach
    const numberFood = itemsFromForm.filter(item => item.selectItem === "food")
    const numberClothes = itemsFromForm.filter(item => item.selectItem === "clothes")
    const numberClean = itemsFromForm.filter(item => item.selectItem === "clean")
    const numberTools = itemsFromForm.filter(item => item.selectItem === "tools")
    const numberOther = itemsFromForm.filter(item => item.selectItem === "other")

    return (
        <div className="list">
            <MuiThemeProvider theme={theme}>

                <div className=" list_buttons">
                    <div className="list_delete-all-bought">
                        <Button variant="outlined" size="small" color="primary"
                            onClick={() => handleRemovetAllBoughtItem()}>
                            usuń wszystkie kupione
                         </Button>
                    </div>
                    <div className="list_clear">
                        <Button variant="outlined" size="small" color="primary"
                            onClick={() => handleWarning()}>
                            wyczyśc liste zakupów
                        </Button>
                    </div>
                </div>


                <div className={`list_warning ${warning ? "show--warning" : ""} `}>
                    <div className="list_warning-alert">
                        <p>Czy na pewno chcesz usunąć wszytkie produkty z listy?</p>

                        <div className="list-button-warning-yes-no ">
                            <Button variant="outlined" size="large" color="primary"
                                onClick={() => handleClearList()}>tak
                            </Button>
                        </div>
                        <div className="list-button-warning-yes-no ">
                            <Button variant="contained" size="large" color="primary"
                                onClick={() => handleWarning()} >nie
                            </Button>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>

            <div className="list_select-kind" >

                <div className="list_folder-all" onClick={() => handleKindOfProduct("all")}>
                    <div className={`button all ${selectItems === "all" ? "active" : null}`}>
                        wszystkie
                    </div>
                    <ul className={`list_table all-list ${selectItems === "all" ? "active" : null}`}>
                        wszystkie ({itemsFromForm.length})
                        {showShopingList("all")}
                    </ul>
                </div>
                <div className="list_folder-food" onClick={() => handleKindOfProduct("food")} >
                    <div className={`button food ${selectItems === "food" ? "active" : null}`}>
                        spożywcze
                    </div>
                    <ul className={`list_table food-list ${selectItems === "food" ? "active" : null}`}>
                        spożywcze ({numberFood.length})
                        {showShopingList("food")}
                    </ul>
                </div>
                <div className="list_folder-clothes" onClick={() => handleKindOfProduct("clothes")}>
                    <div className={`button clothes ${selectItems === "clothes" ? "active" : null}`}>
                        odzież
                    </div>
                    <ul className={`list_table clothes-list ${selectItems === "clothes" ? "active" : null}`}>
                        odzież ({numberClothes.length})
                        {showShopingList("clothes")}
                    </ul>
                </div>
                <div className="list_folder-clean" onClick={() => handleKindOfProduct("clean")}>
                    <div className={`button clean ${selectItems === "clean" ? "active" : null}`}>
                        art. chemiczne</div>
                    <div>
                        <ul className={`list_table clean-list ${selectItems === "clean" ? "active" : null}`}>
                            art. chemiczne ({numberClean.length})
                        {showShopingList("clean")}
                        </ul>
                    </div>
                </div>
                <div className="list_folder-tools" onClick={() => handleKindOfProduct("tools")}>
                    <div className={`button tools ${selectItems === "tools" ? "active" : null}`} >
                        sprzęt domowy
                    </div>
                    <ul className={`list_table tools-list ${selectItems === "tools" ? "active" : null}`}>
                        sprzęt domowy ({numberTools.length})
                        {showShopingList("tools")}
                    </ul>
                </div>

                <div className="list_folder-other" onClick={() => handleKindOfProduct("other")}>
                    <div className={`button other ${selectItems === "other" ? "active" : null}`}>
                        inne
                    </div>
                    <ul className={`list_table other-list ${selectItems === "other" ? "active" : null}`}>
                        inne ({numberOther.length})
                        {showShopingList("other")}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default ItemShopingList;
