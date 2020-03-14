import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'



function Item(props) {

    // const basket = <FontAwesomeIcon icon={faCoffee} />


    return (

        <li className="listli">

            <div
                className={`list_item ${props.item.checkbox ? "important" : ""} ${props.item.bought ? "bought" : ""}`}
                onClick={() => props.handleBoughtItem(props.item.id)}>
                {props.item.text}
            </div>


            <div className="list_basket" onClick={() => props.handleBoughtItem(props.item.id)}>
                <FontAwesomeIcon icon={faCartArrowDown} /></div>


            <div
                className="list_delete-icon"
                onClick={() => props.handleRemovetItemFromList(props.item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>



        </li>
    );
}

export default Item;