
import { PlantItem } from './PlantItem.js';

export default function createPlants(root) {
    
    return ({ plants }) => {
        root.innerHTML = '';
        console.log(plants);
        for (const plant of plants) {
            const p = PlantItem({ plant });
        
            root.append(p);
        }
    };
}
