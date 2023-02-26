import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots'; // removing - using real APIs
import './App.css'

// when using hooks - constructor + related functions to component not used anymore
// render() not used anymore

function App() {
    // constructor() {
    //     super();
    //     // state is something that can change and affect the app
    //     // props instead, will never change, it has a fixed value
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    // hooks can only be used inside components, at the top level
    // hooks are used outside functions; they won't work in for, if, yada yada
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // // read more about react life cycles hooks
    // // make requests here
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => { return response.json() }) // fetch the response
    //         .then(users => { // then get the users and update the robots
    //             this.setState({ robots: users })
    //         });
    // }

    // this function will be called each time after the app renders
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json() }) // fetch the response
            .then(users => { // then get the users and update the robots
                setRobots(users);
            });
    }, []); // second argument is telling when to run useEffect; so only run useEffect when the list is empty (so the first time it renders)

    // for functions inside React, we won't use arrow functions
    const onSearchChange = (event) => {
        // this.setState({ searchfield: event.target.value }); // updating the state
        setSearchfield(event.target.value);
    }

    // render() {

    // everytime there's an onChange on the input, it lets the app know
    // the app runs the function onSearchChange -> and updates the state with the search keyword
    // then the result is filtered (filteredRobots) and pass it to the CardList
    // const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    // }
};

export default App;
