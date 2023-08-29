import Order from './../src/order.js';

describe('Order', () => {
    test('should correctly instantiate an Order object, which starts with a property of "this.pizzas", an empty object, and "this.currentId" set to value 0.', () => {
        let customerOne = new Order();
        expect(customerOne).toEqual({pizzas: {}, currentId: 0});
    });

    test('should correctly increment the property "this.currentId" by 1, and return its value.', () => {
        let customerOne = new Order();
        let idResult = customerOne.assignId();
        expect(customerOne.currentId).toEqual(idResult);
    });
});