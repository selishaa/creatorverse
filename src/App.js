import React, { useState } from 'react';
import Navbar from './components/navbar';
import Form2 from './components/form2';
import Form1 from './components/form1';

function App() {
    const [showForm2, setShowForm2] = useState(false);
    const [creators, setCreators] = useState([]);

    const handleAddCreator = (newCreator) => {
        setCreators([...creators, newCreator]);
        setShowForm2(false); // Hide Form2 after submission
    };

    const handleDeleteCreator = (index) => {
        const updatedCreators = creators.filter((_, i) => i !== index);
        setCreators(updatedCreators);
    };

    return (
        <div>
            <div className="Container">
                <Navbar toggleForm={() => setShowForm2(!showForm2)} />
            </div>
            <div className="secondContainer">
                {showForm2 ? <Form2 onAddCreator={handleAddCreator} /> : <Form1 creators={creators} onDeleteCreator={handleDeleteCreator} />}
            </div>
        </div>
    );
}

export default App;



