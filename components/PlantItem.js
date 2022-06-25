import state from '../state.js';


export function PlantItem({ plant, handleWaterPlant }) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

   

    p.classList.add('plant-list');
    div.classList.add('plant');

    const plantImage = document.createElement('img');
    plantImage.src = '../assets/PLANTS/thirsty.png';

    button.addEventListener ('click', () => {
        handleWaterPlant(plant);
        if (plant.drinks === 0) {
            plantImage.src = '../assets/PLANTS/watered.png';
            button.disabled = plant.drinks === 0;
        } else if (0 < plant.drinks < state.drinks) {
            plantImage.src = '../assets/PLANTS/drink.png';
        }
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