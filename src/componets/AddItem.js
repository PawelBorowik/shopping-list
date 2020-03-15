import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b11adc'
        }
    },
});


const useStyles = makeStyles(theme => ({
    root: {


        '& > *': {
            margin: theme.spacing(1),
            width: 300,

        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,


    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },


}));

function AddItem(props) {

    const classes = useStyles();


    const [id, setId] = useState(0)
    const [text, setText] = useState("")
    // przeróbka stringa na boolien na potrzeby error z inputa:
    const noText = !text
    const emptyInput = Boolean(noText)
    const [checkbox, setCheckbox] = useState(false)
    const [selectItem, setSelectItem] = useState("empty")
    const [bought, setBought] = useState(false)
    const [alert, setAlert] = useState(false)

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
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
        if (!text || selectItem === "empty") {

            setAlert("pole musi być uzupełnione")

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


        <div className="conteiner-form">
            <MuiThemeProvider theme={theme}>
                <form className="form" action="">
                    <div className="form_input">
                        <div className={classes.root} noValidate autoComplete="off" >
                            <TextField id="outlined-basic" label="Dodaj produkt"
                                variant="outlined" value={text} onChange={handleChangeText}
                                error={emptyInput && alert} helperText={!text ? alert : null} />

                        </div>
                    </div>


                    <div className="form_important">

                        <FormControl component="fieldset">

                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Zaznacz jako pilny zakup "
                                labelPlacement="end"
                                checked={checkbox}
                                onChange={handleCheckbox}
                            />
                        </FormControl>
                    </div>

                    <div className="form_kind">
                        <FormControl variant="outlined" className={classes.formControl} error={selectItem === "empty" && alert}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Wybierz kategorię produktu
                        </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={selectItem}
                                onChange={handleChangeSelect}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value="empty"></MenuItem>
                                <MenuItem value={"food"}>spożywcze</MenuItem>
                                <MenuItem value={"clothes"}>odzież</MenuItem>
                                <MenuItem value={"clean"}>art. chemiczne</MenuItem>
                                <MenuItem value={"tools"}>sprzęt domowy</MenuItem>
                                <MenuItem value={"other"}>inne</MenuItem>
                            </Select>
                            <FormHelperText >{selectItem === "empty" ? alert : null}</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="form_button-area">

                        <Button variant="outlined" color="primary"
                            onClick={() => AddNewItem()}>Dodaj do listy zakupów
                        </Button>


                    </div>
                </form>
            </MuiThemeProvider>
        </div>



    );
}

export default AddItem;