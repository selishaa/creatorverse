import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form2.css';


const Form2 = ({ onAddCreator }) => {

    const navigate = useNavigate();

    const [creatorData, setCreatorData] = useState({
        name: '',
        SocialMedia: '',
        image: '',
        description: '',
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCreator(creatorData);
        setCreatorData({
            name: '',
            SocialMedia: '',
            image: '',
            description: '',
        });
        navigate('/');
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
                        Name
                        <input
                            style={inputStyles}
                            type="text"
                            name="name"
                            placeholder="First name"
                            value={creatorData.name}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    name: e.target.value,
                                })
                            }
                            required
                        />
                    </label>

                    <label style={labelStyles}>
                        Social Media
                        <input
                            style={inputStyles}
                            type="text"
                            name="SocialMedia"
                            placeholder="Social Media URL"
                            value={creatorData.SocialMedia}
                            onChange={(e) =>
                                setCreatorData({
                                    ...creatorData,
                                    SocialMedia: e.target.value,
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
                    >
                        Submit
                    </button>
                </section>
            </div>
        </form>
    );
};

export default Form2;













