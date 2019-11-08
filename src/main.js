import React, { Component } from 'react';
import { FactWindow } from './fact-window.js';
import { AgeTracker } from './age-tracker.js';
import { observer } from 'mobx-react';

//App
//
//Props
//model - The model
//

export const ObsApp = observer(class App extends Component {

	componentWillMount () {

		this.facts = this.props.model.GetFacts();
	}

	ageSet = (value) => {

		this.props.model.SetAge(value);
		this.facts = this.props.model.GetFacts();
		this.forceUpdate();
	}

	FWClick = () => {

		this.props.history.push('/fact-categories')
	}

	//All react components have a render method which must return something
	render() {

		return (
			<div className='appjs'>
				<AgeTracker setAge={this.ageSet}/>
				<FactWindow function={this.FWClick} Age={this.props.model.GetAge()} factList={this.facts} />
			</div>
		)
	}
});