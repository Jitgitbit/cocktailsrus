import { Link } from "react-router-dom";
import React, { Component } from "react";


export default class OrdinaryDrinkList extends Component {
  renderOrdinaryDrinks(detail) {
    return <li key={detail}>
    <Link to={ `/details/${detail}` }>{detail}</Link>
          </li>
  }
  render() {
    const { details } = this.props
    return (
      <div className="ordinaryDrinks-list">
        <h1>Ordinary Drinks List</h1>
        { !details && "Loading..." }
        {
          details &&
          <ul>{ details.map(this.renderOrdinaryDrinks) }</ul>
        }
        
      </div>
    )
  }
}

/*
export default function OrdinaryDrinkList (props) {
  const { details, category } = props

  return (
    <div className="ordinary-drink-list">
      <h1>Ordinary drink list</h1>
        <div>
        <Link to="/">Go back to the categories</Link>
        </div>
		This page will show a list of the { category }.
		  <div>
    	  { details && details.map(url => <img src={ url } alt="a" />) } 
  	      { !details && 'Loading...' }
	    </div>
    </div>
  )
}
*/