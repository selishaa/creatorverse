import React, { useState } from 'react';

const Form2 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 6000);
    };

    const formSectionStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '500px', 
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9', // Background color
    };

    const labelStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '15px', // Increased margin
        width: '100%',
        fontWeight: 'bold', // Increased font weight
    };

    const inputStyles = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
    };

    const textareaStyles = {
        ...inputStyles,
        resize: 'vertical',
    };

    const buttonStyles = {
        backgroundColor: '#007bff',
        backgroundImage: 'linear-gradient(to bottom, #007bff, #0056b3)', // Gradient background
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyles = {
        backgroundColor: '#0056b3',
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {isSubmitted && (
                <div className="alert">
                    Your file is submitted! 
                </div>
            )}
            <div className="form-container">
                <section style={formSectionStyles}>
                    <label style={labelStyles}>
                        First name
                        <input style={inputStyles} type="text" id="firstname" name="firstname" placeholder="First name" required />
                    </label>

                    <label style={labelStyles}>
                        Last name
                        <input style={inputStyles} type="text" id="lastname" name="lastname" placeholder="Last name" required />
                    </label>

                    <label style={labelStyles} htmlFor="image">
                        Image
                        <input style={inputStyles} type="file" id="image" name="image" accept="image/*" required />
                    </label>

                    <label style={labelStyles} htmlFor="description">
                        Description
                        <textarea style={textareaStyles} id="description" name="description" placeholder="Description" required />
                    </label>

                    <button style={buttonStyles} onMouseOver={e => e.target.style = { ...buttonStyles, ...buttonHoverStyles }}>
                        Submit
                    </button>
                </section>
            </div>

            <style>
                {`
                .alert {
                    background-color: #ff7070;
                    color: white;
                    border: 1px solid #e25757;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }
                `}
            </style>
        </form>
    );
};

export default Form2;
















