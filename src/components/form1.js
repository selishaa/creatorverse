import React from 'react';

const Form1 = ({ creators, onDeleteCreator }) => {
    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '20 10px',
    };

    const creatorStyles = {
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '93px',
        width: 'calc(30% - 20px)',
        boxSizing: 'border-box',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const imageStyles = {
        maxWidth: '100%',
        maxHeight: '150px',
        marginBottom: '10px',
    };

    const descriptionStyles = {
        fontSize: '0.9rem',
        lineHeight: '1.4',
        marginBottom: '10px',
    };

    const buttonStyles = {
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        padding: '3px 10px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyles}>
            {creators.length === 0 ? (
                <p>No creators yet</p>
            ) : (
                creators.map((creator, index) => (
                    <div key={index} style={{ ...creatorStyles, backgroundImage: `url(${creator.image})` }}>
                        <h3>{creator.firstname} {creator.lastname}</h3>
                        <p style={descriptionStyles}>{creator.description}</p>
                        <button
                            style={buttonStyles}
                            onClick={() => onDeleteCreator(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Form1;















