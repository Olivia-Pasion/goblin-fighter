
import { PlantItem } from './PlantItem.js';

export default function createPlants(root) {
    
    return ({ plants }) => {
        root.innerHTML = '';
        for (const plant of plants) {
            const p = PlantItem({ plant });
        
            root.append(p);
        }
    };
}
