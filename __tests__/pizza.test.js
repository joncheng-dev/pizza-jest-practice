// import Constructor from './../src/javascript.js';
import Pizza from './../src/pizza.js';

describe('Pizza', () => {
    test('should correctly instantiate a Pizza object, which takes a string argument, saving its value into property this.size, and starts with an empty this.toppings array.', () => {
        let aPizza = new Pizza("medium");
        expect(aPizza.size).toEqual("medium");
        expect(aPizza.toppings).toEqual([]);
    });
});