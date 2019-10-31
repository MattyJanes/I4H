import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Splash } from './splash.js';
import { ObsApp } from './main.js';

//App
//
//Props
//model - The model
//

export class App extends Component {

	constructor(props) {

		super(props)
		this.state = {
			ChildAge:0
		}
	}

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

				</Switch>

			</BrowserRouter>
		)
	}
};