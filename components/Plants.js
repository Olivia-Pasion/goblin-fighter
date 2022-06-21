
import state from '../state.js';
import { PlantItem } from './PlantItem.js';

export default function createPlants(root, handleWaterPlant, handleWatered) {
    
    return ({ plants }) => {
        root.innerHTML = '';
        for (const plant of plants) {
            const p = PlantItem({ plant, handleWaterPlant, handleWatered });
        
            root.append(p);

            const button = document.createElement('button');
            button.classList.add('plant');
        
            button.addEventListener('click', () => {
                handleWaterPlant(plant);
            });
        
            const nameEl = document.createElement('span');
            nameEl.classList.add('name');
            nameEl.textContent = plant.name;
        
            button.append(nameEl);
        
            if (plant.drinks === 0) {
                const watered = document.createElement('button');
                watered.classList.add('watered');
                watered.removeEventListener('click', () => {
                    handleWatered(plant);
                });
                button.append(watered);
                
                state.hydrated.length++;
            }
            
        }
    };
}

