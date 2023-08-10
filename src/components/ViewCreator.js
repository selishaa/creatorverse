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

  const handleDeleteClick = () => {
    onDelete(index);
    navigate(`/`);


  }

  return (
    <div className="view-creator-container">
      <div className="picture-container">
        {creator.image && <img src={creator.image} alt={creator.name} />}
      </div>
      <div className="description-container">
        <div className='name-container'>
        <h2 className='name'>{creator.firstname} {creator.lastname}</h2>
        </div>
        <p>{creator.description}</p>
      </div>
      <div className="buttons-containers">
        <div className='button-groups'>
          <button className="delete-buttons" onClick={handleDeleteClick}>
            Delete
          </button>
          <button className="edit-buttons" onClick={handleEditClick}>
            Edit
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewCreator;
