import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));


function AddItem(props) {

    const classes = useStyles();

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
            setAlert("wybierz z listy kategorię produktu")
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
            <div className="form">
                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Dodaj produkt" variant="outlined" value={text} onChange={handleChangeText} />
                </form>


                <p>{alert}</p>
                <div className="form_important">
                    <input className="form_checkbox" type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
                    <label htmlFor="importance">wazny zakup</label>
                </div>
                <div className="form_kind">

                    <select className="form_select" onChange={handleChangeSelect} id="kind">
                        <option value="empty" defaultValue="selected" >wybierz rodzaj</option>
                        <option id="food" value="food">spozywcze</option>
                        <option value="clothes">odziez</option>
                        <option value="clean">art. chemiczne</option>
                        <option value="tools">sprzęt domowy</option>
                        <option value="other">inne</option>
                    </select>
                </div>
                <div className="form_button-area">
                    <input className="form_button" type="reset" value="Dodaj do listy zakupów"
                        onClick={() => AddNewItem()} />
                </div>
            </div>
        </div>
    );
}

export default AddItem;