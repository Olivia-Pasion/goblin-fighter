

export default function createPlants(root, { handleWaterPlant }) {
    
    return ({ plants }) => {
        root.innerHTML = '';
        for (const plant of plants) {
            const p = PlantItem({ plant, handleWaterPlant });
            
            root.append(p);
        }
    };
}

export function PlantItem({ plant, handleWaterPlant }) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

    p.classList.add('plant-list');
    div.classList.add('plant');

    const plantImage = document.createElement('img');
    

    if (plant.drinks <= 0) {
        plantImage.src = './assets/PLANTS/watered.png';
    } else {
        plantImage.src = '../assets/PLANTS/thirsty.png';
    }

// put listener into if statement to stop count
    button.addEventListener ('click', () => 
    {
        handleWaterPlant(plant);
    });

    const name = document.createElement('span');
    name.classList.value = 'plant-name';
    name.textContent = plant.name;

    const drinks = document.createElement('span');
    drinks.classList.value = 'plant-drinks';
    drinks.textContent = plant.drinks;

    button.append(name, drinks, plantImage);

    div.append(button);

    p.append(div);

    return p;
}