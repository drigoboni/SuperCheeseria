import React, { useState } from 'react';
import { Offcanvas, Form, Button } from 'react-bootstrap';
import './CheeseCalculator.css';

interface CheeseCalculatorProps {
    show: boolean;
    handleClose: () => void;
    cheese: {
        id: number;
        name: string;
        pricePerKilo: number;
        color: string;
        image: string;
    };
}

const CheeseCalculator: React.FC<CheeseCalculatorProps> = ({ show, handleClose, cheese }) => {
    const [quantity, setQuantity] = useState<string>('1000');

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || parseFloat(value) >= 0) {
            setQuantity(value);
        }
    };

    const calculatePrice = (): number => {
        const quantityInGrams = parseFloat(quantity);
        if (isNaN(quantityInGrams)) return 0;
        return (quantityInGrams / 1000) * cheese.pricePerKilo;
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="display-6">{cheese.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group controlId="quantity">
                        <Form.Label>Quantity (grams):</Form.Label>
                        <Form.Control
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </Form.Group>
                    <label className="mt-4 mb-4">Price: ${calculatePrice().toFixed(2)}</label>
                    <Button variant="success" className="d-block w-100 mb-2">Proceed to Checkout</Button>
                    <Button variant="outline-dark" className="d-block w-100" onClick={handleClose}>Continue Shopping</Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CheeseCalculator;
