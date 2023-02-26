import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // kind of a try catch - everytime it enters here, update the state with error
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. There's a glitch in the matrix.</h1>
        }

        return this.props.children;
    }
};

export default ErrorBoundry;