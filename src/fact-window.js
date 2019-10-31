import React, { Component } from 'react';

//
//RatingWindow
//
//Props
//name - The instructors name
//inst - The profs institution
//likes - Likes for a given professor
//addlike - Callback for parent
//

export class FactWindow extends Component {

    //Every component has a render function which must return something
    render() {
        
        
        return (

            <div className='factWindow'>
                <div>{this.props.fact}</div>
            </div>
        )
    }
}