import React, { useState } from 'react';
import AddItem from './AddItem'
import ShoppingList from './ItemShoppingList'




function App() {

  const [items, setItems] = useState(null)

  const addNewItem = items => {

    setItems(items)


  }

  return (
    <div className="App">
      <h1>ShoppingList</h1>
      <header >
        <AddItem add={addNewItem} />

        <hr />

      </header>
      <ShoppingList newItem={items} />
    </div>
  );
}

export default App;
