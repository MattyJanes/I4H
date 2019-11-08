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

<<<<<<< HEAD
	FWClick = () => {

        this.props.history.push('/fact-categories')
    }

=======
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7
	//All react components have a render method which must return something
	render() {

		return (
			<div className='appjs'>
				<AgeTracker setAge={this.ageSet}/>
<<<<<<< HEAD
                <FactWindow function={this.FWClick} Age={this.props.model.GetAge()} factList={this.facts} />
=======
				<FactWindow setAge={this.ageSet} factList={this.facts} />
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7
			</div>
		)
	}
});