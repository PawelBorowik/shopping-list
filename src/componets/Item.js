import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBas } from '@fortawesome/free-solid-svg-icons'



function Item(props) {

    const basket = <FontAwesomeIcon icon={faCoffee} />


    return (
        <tr key={props.item.id}>
            <th className={`list_item ${props.item.checkbox ? "important" : ""} ${props.item.bought ? "bought" : ""}`}
                onClick={() => props.handleBoughtItem(props.item.id)}>
                {props.item.text}

            </th>
            <th className="list_delete-icon" onClick={() => props.handleRemovetItemFromList(props.item.id)}  >   x</th>

        </tr>
    );
}

export default Item;