import React, { useState } from 'react';
import Navbar from './components/navbar';
import Form2 from './components/form2';
import Form1 from './components/form1';
import EditCreator from "./components/EditCreator"
import ViewCreator from "./components/ViewCreator"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
    const [showForm2, setShowForm2] = useState(false);
    const [creators, setCreators] = useState([]);


    

    //add function
    const handleAddCreator = (newCreator) => {
      setCreators([...creators, newCreator]); 
  };



  //Edit function
  const onEdit = (passedIndex, passedCreators)=>{
    console.log("I have reached in onEdit of app - passedCreators", passedCreators)

    /** {firstname: 'selisha', lastname: 'fd', image: 'fdf', description: 'df'}*/
    


    /**for database 
    const updatedData = {
      firstname: passedCreators.firstname,
      lastname: passedCreators.lastname,
      image: passedCreators.image,
      description: passedCreators.description,

     
    };

    */

     //Update the state  
    let newCreators = JSON.parse(JSON.stringify(creators)); //Creating a deep copy

    for(let i = 0; i < newCreators.length; i++){
      let element  = newCreators[i];
      let index = newCreators.indexOf(element);
      if(index == passedIndex){
        element.firstname = passedCreators.firstname;
        element.lastname = passedCreators.lastname;
        element.image = passedCreators.image;
        element.description = passedCreators.description;
        break;
      }
    }
 
    setCreators(newCreators);

  }
    




  //delete the state

    const handleDeleteCreator = (index) => {
        const updatedCreators = creators.filter( (_, i) => i != index);
        setCreators(updatedCreators);
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



