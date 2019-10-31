import React, { Component } from 'react';

export class AgeTracker extends Component {

    OnBlur = (e) => {

        let age = e.target.value;
        if (this.props.setAge)
            this.props.setAge(age);
    }

    render() {

        return (
            <input type="number" onBlur={this.OnBlur} />
        )
    }
}