// import services and utilities

// import component creators

import createPlants from './components/Plants.js';
import createAddPlant from './components/AddPlant.js';



// import state and dispatch functions
import state from './state.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const Plants = createPlants(document.querySelector('#plant-list'));

const AddPlant = createAddPlant(document.querySelector('.new-plant')), {
    handleAddPlant: (name) => {
        display();
    },
};

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    
    Plants({ plants: state.plants });
    AddPlant({});

}

// Call display on page load
display();
