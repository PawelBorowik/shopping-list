import React from 'react';



function Item(props) {


    return (
        <li key={props.item.id}>
            <p className={`list_item ${props.item.checkbox ? "important" : ""} ${props.item.bought ? "bought" : ""}`}
                onClick={() => props.handleBoughtItem(props.item.id)}>
                {props.item.text}

            </p>
            <span className="list_delete-icon" onClick={() => props.handleRemovetItemFromList(props.item.id)}  >   x</span>

        </li>
    );
}

export default Item;