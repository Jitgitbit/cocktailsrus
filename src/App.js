import React from 'react';
import './App.css';
import CocktailCategoriesListContainer from './components/CocktailCategoriesListContainer';
import { Route } from "react-router-dom";
import OrdinaryDrinkListContainer from './components/OrdinaryDrinkListContainer';

function App() {
  return (
    <div className="App">
      <main>
      <Route exact path="/" component={CocktailCategoriesListContainer} />
      <Route path="/categories/:category" component={OrdinaryDrinkListContainer} />
      </main>
    </div>
  );
}

export default App;
