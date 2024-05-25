import React from 'react';
import CheeseCard from './CheeseCard';
import './CheeseList.css';

const CheeseList = ({ cheeses }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {cheeses.map(cheese => (
                <CheeseCard key={cheese.id} cheese={cheese} />
            ))}
        </div>
    );
};

export default CheeseList;