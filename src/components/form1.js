import React from 'react';
import Card from './Card'
import './Showcreator.css'

const Form1 = ({ creators, onDeleteCreator }) => {
    return (
        <div className='card-container'> 
            {creators.length === 0 ? (
                <p>No creators yet</p>
            ) : (
                creators.map((creator, index) => (

                    <Card key={index} creator = {creator}  onDeleteCreator = {onDeleteCreator} index = {index}/>

                ))
            )}
        </div>
    );
};

export default Form1;















