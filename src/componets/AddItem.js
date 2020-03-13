import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

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

                    <TextField id="outlined-basic" label="Dodaj produkt"
                        variant="outlined" value={text} onChange={handleChangeText} />
                </form>


                <p>{alert}</p>
                <div className="form_important">
                    <input className="form_checkbox" type="checkbox" id="importance" checked={checkbox} onChange={handleCheckbox} />
                    <label htmlFor="importance">wazny zakup</label>
                </div>
                <div className="form_kind">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                            Wybierz produkt
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={selectItem}
                            onChange={handleChangeSelect}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="empty">

                            </MenuItem>
                            <MenuItem value={"food"}>spożywcze</MenuItem>
                            <MenuItem value={"clothes"}>odzież</MenuItem>
                            <MenuItem value={"clean"}>art. chemiczne</MenuItem>
                            <MenuItem value={"tools"}>sprzęt domowy</MenuItem>
                            <MenuItem value={"other"}>inne</MenuItem>


                        </Select>
                    </FormControl>



                    {/* <select className="form_select" onChange={handleChangeSelect} id="kind">
                        <option value="empty" defaultValue="selected" >wybierz rodzaj</option>
                        <option id="food" value="food">spozywcze</option>
                        <option value="clothes">odziez</option>
                        <option value="clean">art. chemiczne</option>
                        <option value="tools">sprzęt domowy</option>
                        <option value="other">inne</option>
                    </select> */}
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