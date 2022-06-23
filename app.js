// import services and utilities

// import state and dispatch functions
import state, { 
    addPlant,
    setMessage,

 
} from './state.js';



// import component creators

import createPlants from './components/Plants.js';
import createAddPlant from './components/AddPlant.js';


// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// const MessageDisplay = createMessageDisplay(document.querySelector('.message-center'));

const Plants = createPlants(document.querySelector('#plant-list'), {
    handleWaterPlant: (plant) => {
        if (plant.drinks <= 0) return;
        if (Math.random() < 0.33) {
            plant.drinks--;
            setMessage('you added water to' + ' ' + plant.name);
        } else {
            setMessage('not enough water was given to' + ' ' + plant.name);
        }

        if (Math.random() < 0.5) {
            state.spills--;
            setMessage('you spilled the water');
        } else {
            setMessage('not enough water was given to' + ' ' + plant.name);
        }

        if (plant.drinks === 0) {
            state.hydrated.length++;
        }
        if (state.hydrated === 0) {
            setMessage('All of your water has spilled');
        }
    }
});

const AddPlant = createAddPlant(document.querySelector('.new-plant'), {
    handleAddPlant: (name) => {
        
        addPlant({ 
            name, 
            drinks: Math.ceil(Math.random() * 5),
        });
        display();
    },
});

// const HydratedCount = createHydratedCount(document.querySelector('.watered-count'));
// const SpillCount = createSpillCount(document.querySelector('#spill-count'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    
    // MessageDisplay({ message: state.message });
    Plants({ plants: state.plants });
    AddPlant({});
    // HydratedCount({ hydrated: state.hydrated });

}

// Call display on page load
display();
