import state, {
    initialize,
    // import dispatch functions
    setMessage,
    addPlant,
    
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;




test('sets message', (expect) => {
    // Arrange,
    expect.deepEqual(state.message, ''); 
    //Act, 
    setMessage('test');
    //Assert
    expect.deepEqual(state.message, 'test');
    
});

test('adds plant', (expect) => {
    // what is the initial expected state?
    state.plants = [];

    // use the action

    addPlant({ name: '', drink: 3 });

    // what should the state be now?
    expect.deepEqual(state.plants, [{ name: '', drink: 3 }]);

    // remove this line when starting your test
    
});


