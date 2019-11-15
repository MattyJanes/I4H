import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Splash } from './splash.js';
import { ObsApp } from './main.js';
import { FactCategories } from './fact-categories.js';
import { FactsByCategory } from './facts-by-category.js';

//App
//
//Props
//model - The model
//

export class App extends Component {

	componentDidMount() {
		this.props.model.GetData();

		const fontawesome = document.createElement("script");

		fontawesome.src = "https://kit.fontawesome.com/819e9d66c9.js";
		fontawesome.crossOrigin = "anonymous";
		document.body.appendChild(fontawesome);
	}

	//All react components have a render method which must return something
	render() {

		const Model = this.props.model;
		
		return (

			<BrowserRouter>
			
				<Switch>

					<Route exact path='/' render={props => <Splash {...props}/>}/>

					<Route exact path='/main' render={(props) => <ObsApp model={Model} {...props}/>}/>

					<Route exact path='/fact-categories' render={(props) => <FactCategories model={Model} {...props}/>}/>

					<Route exact path='/facts-:category' render={(props) => <FactsByCategory model={Model} {...props}/>}/>

				</Switch>

			</BrowserRouter>
		)
	}
};