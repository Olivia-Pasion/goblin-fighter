
//import state from '../state.js';
import { PlantItem } from './PlantItem.js';

export default function createPlants(root, { handleWaterPlant, handleWatered }) {
    
    return ({ plants }) => {
        root.innerHTML = '';
        for (const plant of plants) {
            const p = PlantItem({ plant, handleWaterPlant, handleWatered });
            
            root.append(p);
            
        }
    };
}
