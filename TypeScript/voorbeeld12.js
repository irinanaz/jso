/* super, polymorfisme */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
// animal = rhino;  // een object van een subklasse kan gebruikt worden
// waar een object van de basisklasse verwacht wordt
// animal = employee; // compileerfout;
console.log(animal, rhino, employee);
