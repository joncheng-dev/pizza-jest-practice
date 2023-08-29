export default function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}