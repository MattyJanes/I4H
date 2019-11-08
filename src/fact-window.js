import React, { Component } from 'react';
import { clearInterval } from 'timers';
import { observer } from 'mobx-react';
import * as mobx from 'mobx';

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
<<<<<<< HEAD
        this.Timer=null;
        }
=======
    }
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7

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
<<<<<<< HEAD

        this.Timer=null;
=======
        clearInterval(this.interval);
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7
    }

    //Every component has a render function which must return something
    render() {
<<<<<<< HEAD

        if (!this.props.Age)
        {
            return (

                <div onClick={this.props.function} className='factWindow'>
                    <div className='factWindowText'>Please enter your childs age to get relevant facts!</div>
                </div>
            )
        }

=======
        
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7
        if (this.props.factList.length > 0)
        {
            return (

                <div className='factWindow'>
                    <div className='factWindowText'>{this.props.factList[this.state.idx].Preview}</div>
                </div>
            )
        }
        else
        {
            return (

<<<<<<< HEAD
                <div onClick={this.props.function} className='factWindow'>
=======
                <div className='factWindow'>
>>>>>>> 762bb6e237e7cfe3c116762c17c1ab08325cbdd7
                    <div className='factWindowText'>Please enter your childs age in moths to get relevant facts!</div>
                </div>
            )
        }
    }
})