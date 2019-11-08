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

	//All react components have a render method which must return something
	render() {

		return (
			<div className='appjs'>
				<AgeTracker setAge={this.ageSet}/>
				<FactWindow setAge={this.ageSet} factList={this.facts} />
			</div>
		)
	}
});