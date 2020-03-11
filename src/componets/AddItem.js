import React, { useState } from 'react';


function AddItem(props) {
    const [id, setId] = useState(0)
    const [text, setText] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const [selectItem, setSelectItem] = useState("empty")
    const [bought, setBought] = useState(false)
    const [alert, setAlert] = useState("")
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked)
    }
    const handleChangeSelect = (e) => {

        setSelectItem(e.target.value)
    }


    const AddNewItem = () => {

        if (!text) {
            setAlert("podaj nazwę")
        }
        else if (selectItem === "empty") {
            setAlert("podaj rodzaj")
        }
        else {
            let newItem = { id, text, checkbox, bought, selectItem }

            setText("")
            setCheckbox(false)
            setSelectItem("empty")
            setBought(false)
            setAlert("")
            props.add(newItem)
        }
        let counter = id
        setId(++counter)
    }


    return (
        <form className="form">
            <input type="text" placeholder="dodaj zakupy" value={text} onChange={handleChangeText} />
            <p>{alert}</p>
            <input type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
            <label htmlFor="importance">wazny zakup</label>
            <label for="kind">wybierz kategorię:</label>
            <select onChange={handleChangeSelect} id="kind">
                <option value="empty" selected="selected"></option>
                <option value="food">spozywcze</option>
                <option value="clothes">odziez</option>
                <option value="clean">art. chemiczne</option>
                <option value="tools">sprzęt domowy</option>
                <option value="other">inne</option>
            </select>
            <input type="reset" value="Dodaj do listy zakupów" onClick={() => AddNewItem()} />
        </form>
    );
}

export default AddItem;