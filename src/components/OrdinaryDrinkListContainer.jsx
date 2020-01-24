import React, { Component } from "react";
import OrdinaryDrinkList from "./OrdinaryDrinkList";

export default class OrdinaryDrinkListContainer extends Component {
  state = {
    details: null
  };
  componentDidMount() {
    const category = this.props.match.params.detail;
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail Very important: compare c= , so match.params is everything before c= , 
// and then detail is where you place the ${category}, also check App.js line 20 for the correct routing!!!
    console.log(apiURL);
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const newDetails = response.drinks.map(drink => drink.strDrink);
        this.updateDetails(newDetails)// here you prepare line 24 to use newDetails for the function, so details has then become newDetails!
        }  
      )
      .catch(console.error);
  }
  
  updateDetails(details) {
    this.setState({
      details: details
    })
  }
  
  render() {
	  const { category } = this.props.match.params.detail;
    return <OrdinaryDrinkList category={category} details={ this.state.details } />
  }
}
