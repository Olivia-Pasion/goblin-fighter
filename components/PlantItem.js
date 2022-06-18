
export function PlantItem({ plant }) {
    console.log(plant);

    const p = document.createElement('p');
    p.classList.add('plant-list');

    const div = document.createElement('div');
    div.classList.add('plant');

    const name = document.createElement('span');
    name.classList.value = 'plant-name';
    name.textContent = plant.name;

    const drinks = document.createElement('span');
    drinks.classList.value = 'plant-drinks';
    drinks.textContent = plant.drinks;

    const plantDisplay = document.createElement('span');
    plantDisplay.classList.value = 'plant-display';
    plantDisplay.textContent = plant.plantDisplay;

    div.append(name, drinks, plantDisplay);

    p.append(div);

    return p;

}