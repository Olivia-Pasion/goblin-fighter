

export default function createPlants(root) {
    
    return ({ plants }) => {
        root.innerHTML = '';

        for (const plant of plants) {
            const div = PlantItem({ plant });
            root.append(div);
        }
    };
}


export function PlantItem({ plant }) {
    const div = document.createElement('div');
    div.textContent = plant.plants;
    
    return div;
}