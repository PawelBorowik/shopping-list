import React, { useState } from 'react';
import AddItem from './AddItem'
import ShoppingList from './ItemShoppingList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faArrowUp } from '@fortawesome/free-solid-svg-icons'




function App() {

  const [icon, setChangeArrowIcons] = useState(false)
  const [items, setItems] = useState(null)

  const addNewItem = items => {

    setItems(items)

  }
  const handleVisebleAddItemForm = () => {
    setChangeArrowIcons(!icon)

  }

  return (
    <div className="App">
      <div className="App_head">
        <h1 className="App_title">Lista zakupów</h1>
        <div className="App_icon" onClick={() => handleVisebleAddItemForm()}>
          <FontAwesomeIcon icon={faList} />
          <div className={`App_arrow ${icon ? "turn" : ""} `}>
            <FontAwesomeIcon icon={faArrowUp} />


          </div>
        </div>
      </div>

      <header >
        <AddItem handleVisibieForm={icon} add={addNewItem} />

        <hr />

      </header>
      <ShoppingList newItem={items} />
    </div>
  );
}

export default App;
