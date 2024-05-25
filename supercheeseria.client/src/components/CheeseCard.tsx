import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CheeseCalculator from './CheeseCalculator';
import './CheeseCard.css';

interface CheeseCardProps {
    cheese: Cheese;
}

const CheeseCard: React.FC<CheeseCardProps> = ({ cheese }) => {
    const [showCalculator, setShowCalculator] = useState(false);

    const handleShowCalculator = () => setShowCalculator(true);
    const handleCloseCalculator = () => setShowCalculator(false);

    return (
        <>
            <Card className="cheese-card m-3 shadow" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cheese.image} alt={cheese.name} />
                <Card.Body>
                    <Card.Title>{cheese.name}</Card.Title>
                    <Card.Text>
                        <strong>Price/kg:</strong> ${cheese.pricePerKilo} <br />
                        <strong>Color:</strong> {cheese.color}
                    </Card.Text>
                    <Button variant="dark" onClick={handleShowCalculator}>Buy Now</Button>
                </Card.Body>
            </Card>            
            <CheeseCalculator
                show={showCalculator}
                handleClose={handleCloseCalculator}
                cheese={cheese}
            />
        </>
    );
};

export default CheeseCard;