import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';


const Card = ({ creator, onDeleteCreator, onEditCreator, index }) => {
    const navigate = useNavigate();
    const handleEditClick = (index) => {
        navigate(`/edit/${index}`, { state: { creator } }); // Pass the creator as state
      };
      console.log("This is image url", creator.image);

      const handleViewClick = (index) => {
        navigate(`/creators/${index}`, { state: { creator } });
      };
      
    
  return (
    <div className="card" style={{ backgroundImage: `url(${creator.image})`, backgroundSize: 'cover' }}>
      <h3 className="title">
        {creator.name}
      <a href={creator.SocialMedia} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-external-link-alt social-icon"></i>
      </a>
    </h3>
      <p className="description">{creator.description}</p>
      <div className="buttons-container">
        <button className="edit-button" onClick={() => handleEditClick(index)}>
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="view-button" onClick={() => handleViewClick(index)}>
        <i className="fas fa-eye"></i>
  </button>
        <button className="delete-button" onClick={() => onDeleteCreator(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
