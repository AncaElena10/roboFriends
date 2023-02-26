import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;
    return (
        // all this integrated html is called JSX
        // for jsx, React must be imported
        <div className='tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
