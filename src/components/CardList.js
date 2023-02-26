import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    // just to test if the ErrorBoundry works
    // if (true) {
    //     throw new Error('Oopsy daisy.');
    // }
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    });
    return <div>{cardComponent}</div>;
};

export default CardList;
