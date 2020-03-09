import React, { useState } from 'react';


function AddItem(props) {

    const [text, setText] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const [selectItem, setSelectItem] = useState(null)
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
            setAlert("dodaj produkt!")
        }
        else {
            let newItem = { text, checkbox, bought, selectItem }

            setText("")
            setCheckbox(false)
            setSelectItem("empty")
            setBought(false)
            setAlert("")
            props.add(newItem)
        }
    }




    return (
        <form className="form">
            <input type="text" placeholder="dodaj zakupy" value={text} onChange={handleChangeText} />
            <p>{alert}</p>
            <input type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
            <label htmlFor="importance">wazny zakup</label>

            <label for="kind">wybierz kategorię:</label>

            <select onChange={handleChangeSelect} id="kind">
                <option selected="selected"></option>
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