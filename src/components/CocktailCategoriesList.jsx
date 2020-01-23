import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class cocktailCategoriesList extends Component {
  renderCocktailCategory(cocktailCategory) {
    return <li key={cocktailCategory}>
    <Link to={ `/cocktailCategories/${cocktailCategory}` }>{cocktailCategory}</Link>
          </li>
  }
  render() {
    const { cocktailCategories } = this.props
    return (
      <div className="cocktailCategory-list">
        <h1>cocktailCategories List</h1>
        { !cocktailCategories && "Loading..." }
        {
          cocktailCategories &&
          <ul>{ cocktailCategories.map(this.renderCocktailCategory) }</ul>
        }
        
      </div>
    )
  }
}