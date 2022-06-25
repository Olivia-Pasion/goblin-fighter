// import services and utilities

// import state and dispatch functions
import state, { 
    addPlant,
    setMessage,
    

 
} from './state.js';



// import component creators

import createPlants from './components/Plants.js';
import createAddPlant from './components/AddPlant.js';
import createMessageDisplay from './components/MessageDisplay.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 


const AddPlant = createAddPlant(document.querySelector('.new-plant'), {
    handleAddPlant(name) {
        
        addPlant({ 
            name, 
            drinks: Math.ceil(Math.random() * 5),
        });
        display();
    },
});

const Plants = createPlants(document.querySelector('#plant-list'), {
    handleWaterPlant(plant) {
        if (plant.drinks <= 0) {
            state.hydrated++;
            display();
            return;
        } 
        if (state.spills === 0) {
            setMessage('All of your water has spilled');
            display();
            return;
        }

        if (Math.random() < 0.75) {
            
            setMessage('you added water to' + ' ' + plant.name);
            plant.drinks--;
            
            display();
        } else if (Math.random() < 0.5) {
            state.spills--;
            setMessage('you spilled the water');
            display();
        }
        else 
        {

            setMessage('not enough water was given to' + ' ' + plant.name);
            display();
        }
        console.log(state.message);

        
    }
});

const MessageDisplay = createMessageDisplay(document.querySelector('.message-center'));
const hydratedCount = document.querySelector('.hydrated-count');

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Plants({ plants: state.plants });
    AddPlant({});
    MessageDisplay({ message: state.message });
    hydratedCount.textContent = state.hydrated;
    
    

}

// Call display on page load
display();
