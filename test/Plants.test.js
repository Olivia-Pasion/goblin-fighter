
import { PlantItem } from '../components/Plants.js';

QUnit.module('Plants');

const test = QUnit.test;



test('renders a plant', (expect) => {
    // Arrange, Act, Assert
    const p = PlantItem({
        plant: { name: 'lily', drink: 3 }
    });

    expect.equal(p.outerHTML, '<p class="plant-list"><div class="plant"><span class="plant-name">lily</span><span class="plant-drinks"></span><span class="plant-display"></span></div></p>');

});