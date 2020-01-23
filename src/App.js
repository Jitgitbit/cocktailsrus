import React from 'react';
import './App.css';
import CocktailCategoriesListContainer from './components/CocktailCategoriesListContainer';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
      <Route exact path="/" component={CocktailCategoriesListContainer} />
      </main>
    </div>
  );
}

export default App;
