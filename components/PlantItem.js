import state from '../state.js';


export function PlantItem({ plant, handleWaterPlant, handleWatered }) {

    if (plant.drinks === 0) {
        const watered = document.createElement('button');
        watered.classList.add('watered');
        watered.textContent = 'Hydrated!';
        watered.removeEventListener('click', () => {
            handleWatered(plant);
        });
        div.append(watered);
        
        state.hydrated.length++;
    }

    const p = document.createElement('p');
    p.classList.add('plant-list');

    const div = document.createElement('div');
    div.classList.add('plant');

    const button = document.createElement('button');

    button.addEventListener ('click', () => {
        handleWaterPlant(plant);
        if (plant.drinks === 0) {
            plantImage.src = '../assets/PLANTS/watered.png';} else {
            plantImage.src = '../assets/PLANTS/drink.png';
        }
    });


    const name = document.createElement('span');
    name.classList.value = 'plant-name';
    name.textContent = plant.name;

    const drinks = document.createElement('span');
    drinks.classList.value = 'plant-drinks';
    drinks.textContent = plant.drinks;

    const plantDisplay = document.createElement('span');
    plantDisplay.classList.value = 'plant-display';
    plantDisplay.textContent = plant.plantDisplay;

    const plantImage = document.createElement('img');
    plantImage.src = '../assets/PLANTS/thirsty.png';
    
    plantImage.classList.add('thirsty');
    plantImage.classList.add('drink');
    plantImage.classList.add('watered');

    button.append(name, drinks, plantImage);

    div.append(button);

    p.append(div);

    return p;

}