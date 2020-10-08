import React from 'react';
import fakeData from '../../fakeData/Vol'
const Donation = () => {
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addVoluntaryWorks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
         
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add services</button>
        </div>
    );
};

export default Donation;