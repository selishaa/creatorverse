import React from 'react';
import './ViewCreator.css';
import { useParams, useNavigate } from 'react-router-dom'; // Import useHistory
// You can create a separate CSS file for styling

const ViewCreator = ({ creators, onDelete }) => {
  const { index } = useParams();
  const navigate = useNavigate(); // Initialize useHistory

  const creator = creators[index];

  if (!creator) {
    return <div>No creator available</div>;
  }

  const handleEditClick = () => {
    // Navigate to the edit page with the appropriate index
    navigate(`/edit/${index}`, { state: { creator } });
  };

  const handleDeleteClick = ()=>{
    onDelete(index);
    navigate(`/`);


  }

  return (
    <div className="view-creator-container">
      <div className="picture-container">
        {creator.image && <img src={creator.image} alt={creator.name} />}
      </div>
      <div className="description-container">
        <h2>{creator.firstname} {creator.lastname}</h2>
        <p>{creator.description}</p>
      </div>
      <div className="button-container">
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete Creator
        </button>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Creator
        </button>
      </div>
    </div>
  );
};

export default ViewCreator;
