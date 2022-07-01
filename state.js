// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];

    
    state.message = '';
    state.spills = 10;
    state.hydrated = 0;
    state.drinks = Math.ceil(Math.random() * 5);
    state.plants = [
        { name: 'lily', drinks: 3 },
        { name: 'petal', drinks: 5 },
    ];

}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state



export function setMessage(message) {
    state.message = message;
}

export function addPlant(plant) {
    state.plants.push(plant);
}

export function hydratedCount() {
    state.hydrated++;
}

export function spillCount() {
    state.spills--;
};
