
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const EditCreator = ({onEdit, creators}) => {
const { index } = useParams();
  const location = useLocation();
  //const { creator } = location.state;
  const creator = creators[index]
  const navigate = useNavigate();



  // Implement your edit form and logic using the 'creator' object
  const [creatorData, setCreatorData] = useState({
    firstname: creator.firstname,
    lastname: creator.lastname,
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
        firstname: '',
        lastname: '',
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
                First name
                <input
                   
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

            <label >
                Last name
                <input
                    
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
