import React from 'react';
import Card from './Card'
import './Showcreator.css'

const Form1 = ({ creators, onDeleteCreator }) => {

    console.log("This is creators in form1", creators);
    return (
        
        <div className='card-container'> 
            {creators.length === 0 ? (
                <div className='no-message'> 
                <p>No Creators Yet 😔</p>
                </div>
            ) : (
                creators.map((creator, index) => (

                    

                    <Card key={index} creator={creator} onDeleteCreator={onDeleteCreator} />

                ))
            )}
        </div>
        
    );
};

export default Form1;















