import React, { useState } from 'react';

const Form2 = ({ onAddCreator }) => {
    const [creatorData, setCreatorData] = useState({
        firstname: '',
        lastname: '',
        image: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCreator(creatorData);
        setCreatorData({
            firstname: '',
            lastname: '',
            image: '',
            description: '',
        });
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
        backgroundColor: '#f9f9f9',
    };

    const labelStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '15px',
        width: '100%',
        fontWeight: 'bold',
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
        backgroundImage: 'linear-gradient(to bottom, #007bff, #0056b3)',
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
            <div className="form-container">
                <section style={formSectionStyles}>
                    <label style={labelStyles}>
                        First name
                        <input
                            style={inputStyles}
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            value={creatorData.firstname}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    firstname: e.target.value,
                                })
                            }
                            required
                        />
                    </label>

                    <label style={labelStyles}>
                        Last name
                        <input
                            style={inputStyles}
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            value={creatorData.lastname}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    lastname: e.target.value,
                                })
                            }
                            required
                        />
                    </label>

                    <label style={labelStyles} htmlFor="image">
                        Image URL
                        <input
                            style={inputStyles}
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Image URL"
                            value={creatorData.image}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    image: e.target.value,
                                })
                            }
                            required
                        />
                    </label>

                    <label style={labelStyles} htmlFor="description">
                        Description
                        <textarea
                            style={textareaStyles}
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={creatorData.description}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    description: e.target.value,
                                })
                            }
                            required
                        />
                    </label>

                    <button
                        style={buttonStyles}
                        onMouseOver={(e) => (e.target.style = { ...buttonStyles, ...buttonHoverStyles })}
                    >
                        Submit
                    </button>
                </section>
            </div>
        </form>
    );
};

export default Form2;













