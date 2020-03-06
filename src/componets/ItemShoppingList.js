import React from 'react';
import Item from './Item'

import '../style/App.css';

function AddItem() {


    return (
        <div className="App">
            <header className="App-header">
                Lista zakupów
               <Item />
                <Item />
                <Item />
            </header>
        </div>
    );
}

export default AddItem;