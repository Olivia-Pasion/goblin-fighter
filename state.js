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
    state.hydrated = [];
    state.plants = [
        { name: 'lily', drink: 3 },
        { name: 'petal', drink: 5 },
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

export function updatePlant(plant) {
    const index = state.plants.indexOf(plant);
    if (index !== -1) {
        state.plants[index] = plant;
    }
}

export function updateHydrated() {

}

export function spillCount() {
    
}