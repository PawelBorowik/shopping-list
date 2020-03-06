import React from 'react';
import Item from './Item'

import '../style/App.css';

function ItemShopingList() {


    return (
        <div className="App">

            Lista zakupów
            <Item />
            <Item />
            <Item />

        </div>
    );
}

export default ItemShopingList;