// import services and utilities

// import state and dispatch functions
import state, { 
    addPlant,
    setMessage,
    hydratedCount,
    spillCount
} from './state.js';



// import component creators

import createPlants from './components/Plants.js';
import createAddPlant from './components/AddPlant.js';
import createMessageDisplay from './components/MessageDisplay.js';
import createHydrated from './components/Hydrated.js';
import createSpillCount from './components/SpillCount.js';

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

const Hydrated = createHydrated(document.querySelector('#hydrated'), { 
    handleHydrated(hydrated) {
        hydratedCount(hydrated);
        return () => {
            display();
        };
    }
}
);

const SpillCount = createSpillCount(document.querySelector('#spill-count'), {
    handleHydrated(spills) {
        spillCount(spills);
        return () => {
            display();
        };
    }
});

const Plants = createPlants(document.querySelector('#plant-list'), {
    handleWaterPlant(plant) {
       
        
        if (state.spills === 0) {
            setMessage('All of your water has spilled');
            return () => {
                display();
            };
        }

        if (Math.random() < 0.33 && plant.drinks !== 0) {
            
            plant.drinks--;
            setMessage('you added water to' + ' ' + plant.name); 
            
            display();

        } 
        
        else if (Math.random() < 0.65 && state.spills !== 0) 
        {
            spillCount();
            console.log(state.spills);
            setMessage('you spilled the water');
            return display();
        }

        else 
        {
            setMessage('not enough water was given to' + ' ' + plant.name);
            display();
        }

        if (plant.drinks <= 0) 
        {
            hydratedCount(); 
            
            return display(); 
        } 
    }
});

const MessageDisplay = createMessageDisplay(document.querySelector('.message-center'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Plants({ plants: state.plants });
    AddPlant({});
    MessageDisplay({ message: state.message });
    Hydrated({ hydrated: state.hydrated });
    SpillCount({ spills: state.spills });
    
}

// Call display on page load
display();
