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

	ageSet = (value) => {

		this.props.model.SetAge(value);
	}

	//All react components have a render method which must return something
	render() {

		const facts = this.props.model.GetFacts();

		return (
			<div className='appjs'>
				<AgeTracker setAge={this.ageSet}/>
				<ol>
					{facts.map ((value, key) =>
						<FactWindow key={key} fact={value.Preview} />)}
				</ol>
			</div>
		)
	}
});