import React, { Component } from 'react'

export class Splash extends Component {

    constructor(props) {
        super(props);
        this.Timer = null;
    }

    componentDidMount() {

        this.Timer = setTimeout(this.onTimeout, 2000);
    }

    componentWillUnmount() {
        this.Timer = null;
    }

    onTimeout = () => {

        this.props.history.replace('/main');
    }

    render() {

        return (
            <div>
                <h1>
                    Welcome to the [NAME PENDING] splash page.
                </h1>

                <h1>
                    Please wait while the app loads...
                </h1>
            </div>
        )
    }
}