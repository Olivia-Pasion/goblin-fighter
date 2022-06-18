const plantInput = document.querySelector('.plant-name');


export default function createAddPlant(form, actions) {
    const newPlant = actions.handleAddPlant;
    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        newPlant(plantInput.value);   
        plantInput.value = '';  

    });

    return () => { };
}