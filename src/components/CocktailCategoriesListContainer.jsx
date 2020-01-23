import React, { Component } from "react";
import CocktailCategoriesList from "./CocktailCategoriesList";


export default class CocktailCategoriesListContainer extends Component {
  state = { cocktailCategories: null };
  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const newCocktailCategories = response.drinks.map(drink => drink.strCategory);
        //const newCocktailCategories = Object.keys(response.drinks.strCategory)         //use .keys for objects, and use .map for Arrays !!
        this.updatecocktailCategories(newCocktailCategories)
      })
      .catch(console.error);
  }
  updatecocktailCategories(newCocktailCategories) {
    this.setState({
      cocktailCategories: newCocktailCategories
    });
  }
  render() {
    return <CocktailCategoriesList cocktailCategories={this.state.cocktailCategories} />
  }
}