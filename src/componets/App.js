import React, { useState } from 'react';
import AddItem from './AddItem'
import ShoppingList from './ItemShoppingList'


import '../style/App.css';

function App() {

  const [items, setItems] = useState(null)

  const addNewItem = items => {
    console.log(items)

  }

  return (
    <div className="App">
      <h1>ShoppingList</h1>
      <header >
        <AddItem />

        <hr />

      </header>
      <ShoppingList addNewItem={addNewItem} />
    </div>
  );
}

export default App;
