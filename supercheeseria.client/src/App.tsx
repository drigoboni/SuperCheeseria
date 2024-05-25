import { useEffect, useState } from 'react';
import CheeseList from './components/CheeseList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Cheese {
    id: number;
    name: string;
    pricePerKilo: number;
    color: string;
    image: string;
}

function App() {
    const [cheeses, setCheeses] = useState<Cheese[]>();

    useEffect(() => {
        populateCheesesData();
    }, []);

    const contents = cheeses === undefined
        ? <p><em>Loading Cheeses...</em></p>
        : <div className="container">
            <h1 className="display-6">Choose Your Favorite Cheese Delight</h1>
            <CheeseList cheeses={cheeses} />
        </div>;

    return (
        <div>
            {contents}
        </div>
    );

    async function populateCheesesData() {
        const response = await fetch('cheese');
        const data = await response.json();
        setCheeses(data);
    }
}

export default App;