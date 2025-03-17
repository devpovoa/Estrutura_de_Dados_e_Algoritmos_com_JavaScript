var MyObject = /** @class */ (function () {
    function MyObject(age) {
        this.age = age;
    }
    MyObject.prototype.comparaTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
var obj1 = new MyObject(25);
var obj2 = new MyObject(30);
var obj3 = new MyObject(25);
console.log(obj1.comparaTo(obj2)); // Deve imprimir -1 (25 < 30)
console.log(obj2.comparaTo(obj1)); // Deve imprimir 1 (30 > 25)
console.log(obj1.comparaTo(obj3)); // Deve imprimir 0 (25 == 25)
