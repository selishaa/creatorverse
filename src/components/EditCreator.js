
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './editcreator.css';




const EditCreator = ({onEdit, creators}) => {
const { index } = useParams();
  const location = useLocation();
  //const { creator } = location.state;
  const creator = creators[index]
  const navigate = useNavigate();



  // Implement your edit form and logic using the 'creator' object
  const [creatorData, setCreatorData] = useState({
    name: creator.name,
    SocialMedia: creator.SocialMedia,
    image: creator.image,
    description: creator.description,
});

const handleSubmit = (e, index) => {
    e.preventDefault();
    console.log("This is the value of the index.", index);
    console.log("creatorData is here", creatorData);
    console.log("index is here", index);
    onEdit(index, creatorData);
    setCreatorData({
        name: '',
        SocialMedia: '',
        image: '',
        description: '',
    });
    navigate('/');
};

if (!creator) {
    return <div>No creators to display</div>;
  }


  return (
    <form className="form" onSubmit={(e)=>{handleSubmit(e,index)}}>
    <div className="form-container">
        <section >
            <label >
               Name
                <input
                   
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

            <label >
                Social Media
                <input
                    
                    type="text"
                    name="SocialMedia"
                    placeholder="Social Media"
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

            <label  htmlFor="image">
                Image URL
                <input
                  
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

            <label htmlFor="description">
                Description
                <textarea
       
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

        
            >
                Submit
            </button>
        </section>
    </div>
</form>
  );
};

export default EditCreator;
