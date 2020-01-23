import React from "react";
import { Link } from "react-router-dom";


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
