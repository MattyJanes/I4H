import React, { Component } from 'react';
import { observer } from 'mobx-react';

//
//RatingWindow
//
//Props
//name - The instructors name
//inst - The profs institution
//likes - Likes for a given professor
//addlike - Callback for parent
//

export const FactWindow = observer(class FactWindow extends Component {

    constructor(props) {

        super(props);
        this.state = {idx:0};
        this.Timer=null;
        }

    tick() {

        if (this.props.factList.length > 0)
        {
            if (this.state.idx + 1 >= 5)
            {
                this.setState({idx:0});
            }
            else
            {
                this.setState({idx:this.state.idx + 1} );
            }
        }
    }

    componentDidMount() {

        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {

        this.Timer=null;
    }

    //Every component has a render function which must return something
    render() {

        if (!this.props.Age)
        {
            return (

                <div onClick={this.props.function} className='factWindow'>
                    <div className='factWindowText'>Please enter your childs age to get relevant facts!</div>
                </div>
            )
        }

        if (this.props.factList.length > 0)
        {
            return (

                <div onClick={this.props.function} className='factWindow'>
                    <div className='factWindowText'>{this.props.factList[this.state.idx].Preview}</div>
                </div>
            )
        }
        else
        {
            return (

                <div onClick={this.props.function} className='factWindow'>
                    <div className='factWindowText'>Please enter your childs age in moths to get relevant facts!</div>
                </div>
            )
        }
    }
})