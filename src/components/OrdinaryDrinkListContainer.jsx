import React, { Component } from "react";
import OrdinaryDrinkList from "./OrdinaryDrinkList";

export default class OrdinaryDrinkListContainer extends Component {
  state = {
    details: null
  };
  componentDidMount() {
    const category = this.props.drinks.strCategory;
    console.log(category);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const newDetails = response.drinks.map(drink => drink.strCategory);
        console.log(newDetails);
        this.updateDetails(newDetails)
        })
      .catch(console.error);
  }
  updateDetails(details) {
    this.setState({
      details: details
    })
  }
  render() {
	  const { category } = this.props.drinks.strCategory;
    return <OrdinaryDrinkList category={category} details={ this.state.details } />
  }
}
