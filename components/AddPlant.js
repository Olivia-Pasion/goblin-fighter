


export default function createAddPlant(input, { handleAddPlant }) {
    
    input.addEventListener('keypress', (e) => {
        console.log(e);

        handleAddPlant(input.value);
        input.value = '';
    });
    return () => {};
}