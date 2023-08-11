import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';

const Card = ({ creator, onDeleteCreator }) => {

  console.log("This is the creator in the card", creator);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${creator.id}`, { state: { creator } });
  };

  const handleViewClick = () => {
    navigate(`/creators/${creator.id}`, { state: { creator } });
  };

  const handleDeleteClick = () => {
    onDeleteCreator(creator);
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
        <button className="edit-button" onClick={handleEditClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="view-button" onClick={handleViewClick}>
          <i className="fas fa-eye"></i>
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
