// import services and utilities
import { getRandomItem } from './utils.js';

// import state and dispatch functions
import state, { 
    addPlant,
    setMessage,
 
} from './state.js';



// import component creators

import createPlants from './components/Plants.js';
import createAddPlant from './components/AddPlant.js';
import createMessageDisplay from './components/MessageDisplay.js';
import createHydratedCount from './components/HydratedCount.js';
import createSpillCount from './components/SpillCount.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const MessageDisplay = createMessageDisplay(document.querySelector('.message-center'));

const wateredMessage = [
    'plant caused a spill!',
    'not enough water came out',
    'you added enough water :)',
];


const Plants = createPlants(document.querySelector('#plant-list'), {
    handleDrink: (plant) => {
      
    },
    handleNone: (plant) => {
        
    },
    handleSpill: (plant) => {
        
    }
});

const AddPlant = createAddPlant(document.querySelector('.new-plant'), {
    handleAddPlant: (name) => {
        
        addPlant({ name, drinks: 3 });
        display();
    },
});

const HydratedCount = createHydratedCount(document.querySelector('.watered-count'));
const SpillCount = createSpillCount(document.querySelector('#spill-count'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    
    MessageDisplay({ message: state.message });
    Plants({ plants: state.plants });
    AddPlant({});
    HydratedCount({ hydrated: state.hydrated });

}

// Call display on page load
display();
