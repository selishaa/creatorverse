import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Form2 from './components/form2';
import Form1 from './components/form1';
import EditCreator from "./components/EditCreator"
import ViewCreator from "./components/ViewCreator"
import supabase from './components/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
    const [showForm2, setShowForm2] = useState(false);
    const [creators, setCreators] = useState([]);

    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
        return [];
      }
      return data;
    };
  


    //fetching the data from the database
    useEffect(() => {
      const fetchCreators = async () => {
        // Fetch data from the "creators" table
        const { data, error } = await supabase.from('creators').select('*');
        if (error) {
          console.error('Error fetching creators:', error);
        } else {
          // Update the state with the fetched data
          setCreators(data);
          console.log("This is creators.", creators)
        }
      };
  
      // Call the fetchCreators function
      fetchCreators();
    }, []); 




    

    //add function
    const handleAddCreator = async (passedCreators) => {

      const updatedData = {
        name: passedCreators.name,
        socialmedia: passedCreators.SocialMedia,
        image: passedCreators.image,
        description: passedCreators.description,
  
      };

       // adding the database
    
const { data, error } = await supabase
.from('creators')
.insert([
  { 
    
    name: passedCreators.name,
     socialmedia: passedCreators.SocialMedia,
     image: passedCreators.image,
     description: passedCreators.description,

},
])
.select()


  if (error) {
    console.error('Error adding creator:', error);
  } 


      //updating the state
   // setCreators([...creators, passedCreators]); 

   const fetchedData = await fetchCreators();
      setCreators(fetchedData);


    


      
  };



  //Edit function
  const onEdit = async (passedIndex, passedCreators, passedId)=>{
    console.log("I have reached in onEdit of app - passedCreators", passedCreators)
    console.log("I am passedCreators.id", passedCreators.id);
    const updatedData = {
      name: passedCreators.name,
      socialmedia: passedCreators.socialmedia,
      image: passedCreators.image,
      description: passedCreators.description,

    };

    console.log("I am the passedCreators in edit", passedCreators);

        
    const { data, error } = await supabase
    .from('creators')
    .update({ 
      name: passedCreators.name,
      socialmedia: passedCreators.socialmedia,
      image: passedCreators.image,
      description: passedCreators.description
    
    })
    .eq('id', passedId)
    .select()

    if (error) {
      console.log("Error while updating the database.")
    }

    /** {firstname: 'selisha', lastname: 'fd', image: 'fdf', description: 'df'}*/
    



  



     //Update the state  
    let newCreators = JSON.parse(JSON.stringify(creators)); //Creating a deep copy

    for(let i = 0; i < newCreators.length; i++){
      let element  = newCreators[i];
      if(element.id == passedId){
        element.name = passedCreators.name;
        element.socialmedia = passedCreators.socialmedia;
        element.image = passedCreators.image;
        element.description = passedCreators.description;
        break;
      }
    }
 
    const fetchedData = await fetchCreators();
    setCreators(fetchedData);

  }
    




  //delete the state

    const handleDeleteCreator = async(passedCreator) => {

      

      
      


      //frontend, deleting in the state

  
      console.log("This is passedId", passedCreator);
        const updatedCreators = creators.filter( (creator) => creator != passedCreator );
        setCreators(updatedCreators);



        

      //deleting in the databse
      const { error } = await supabase.from('creators').delete().eq('id', passedCreator.id);
      if (error) {
        console.error('Error deleting creator:', error);
      }




    };
    

    



    return (
        <div>
          <Router>
            

         
            <div className="Container">
                <Navbar toggleForm={() => setShowForm2(!showForm2)} showForm = {showForm2} />
            </div>
            
            <div className="secondContainer">
            <Routes>  
              <Route path = "/" element = {<Form1 creators={creators} onDeleteCreator={handleDeleteCreator}  />}/>  
              <Route path = "/form2" element={<Form2 onAddCreator={handleAddCreator}  />}/>  
              <Route
              path="/edit/:index"
              element= {<EditCreator creators={creators} onEdit = {onEdit} />}
            />
            <Route
              path="/creators/:index"
              element= {<ViewCreator creators={creators} onDelete = {handleDeleteCreator} />}
            />

           </Routes>
           </div>

            

            </Router>
        </div>
    );
}

export default App;



