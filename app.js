// import services and utilities

// import component creators
import state from './state';
import createPlants from './components/Plants';
import createAddPlant from './components/AddPlant';



// import state and dispatch functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const Plants = createPlants(document.querySelector('#plant-list'));
const AddPlant = createAddPlant(document.querySelectorAll('form'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    
    Plants({ plants: state.plants });
    AddPlant({ plants: state.plants });

}

// Call display on page load
display();
