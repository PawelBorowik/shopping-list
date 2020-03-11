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
        <div className="add_form">
            <form className="form">


                <div class="form-field">
                    <div class="form-field__control">
                        <input id="product" type="text" class="form-field__input" placeholder=" "
                            value={text} onChange={handleChangeText} />
                        <label for="product" className="form-field__label">Dodaj zakupy</label>
                        <div class="form-field__bar"></div>
                    </div>
                </div>

                {/* <input className="form_text" type="text" placeholder="dodaj zakupy" value={text} onChange={handleChangeText} /> */}
                <p>{alert}</p>
                <div class="row">
                    <input className="form_checkbox" type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
                    <label htmlFor="importance">wazny zakup</label>
                </div>
                <div class="row">
                    <label for="kind">wybierz kategorię:</label>
                    <select className="form_select" onChange={handleChangeSelect} id="kind">
                        <option value="empty" selected="selected"></option>
                        <option value="food">spozywcze</option>
                        <option value="clothes">odziez</option>
                        <option value="clean">art. chemiczne</option>
                        <option value="tools">sprzęt domowy</option>
                        <option value="other">inne</option>
                    </select>
                </div>
                <input className="form_button" type="reset" value="Dodaj do listy zakupów" onClick={() => AddNewItem()} />
            </form>
        </div>
    );
}

export default AddItem;