import React from 'react';
import AddItem from './AddItem'
import ShoppingList from './ItemShoppingList'

import '../style/App.css';

function App() {
  return (
    <div className="App">
      <h1>ShoppingList</h1>
      <header >
        <AddItem />

        <hr />
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
