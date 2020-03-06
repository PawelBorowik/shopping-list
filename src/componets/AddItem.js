import React, { useState } from 'react';


function AddItem() {

    const [text, setText] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked)
    }
    const AddNewItem = () => {
        let newItem = { text, checkbox }
        console.log(newItem)
        setText("")
        setCheckbox(false)
    }



    return (
        <div className="form">
            <input type="text" placeholder="dodaj zakupy" value={text} onChange={handleChangeText} />
            <input type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
            <label htmlFor="importance">wazny zakup</label>
            <button onClick={() => AddNewItem()}>Dodaj do listy zakupów</button>
        </div>
    );
}

export default AddItem;