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

	//All react components have a render method which must return something
	render() {

		const facts = this.props.model.GetFacts();

		return (
			<div className='appjs'>
				<AgeTracker />
				<ol>
					{facts.map ((value, key) =>
						<FactWindow key={key} fact={value.Preview} />)}
				</ol>
			</div>
		)
	}
});