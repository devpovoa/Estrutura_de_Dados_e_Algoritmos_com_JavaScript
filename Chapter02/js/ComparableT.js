var MyObjectOne = /** @class */ (function () {
    function MyObjectOne(age) {
        this.age = age;
    }
    MyObjectOne.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObjectOne;
}());
var obj1 = new MyObjectOne(38);
var obj2 = new MyObjectOne(27);
var obj3 = new MyObjectOne(16);
var obj4 = new MyObjectOne(40);
console.log(obj1.compareTo(obj2));
console.log(obj2.compareTo(obj3));
console.log(obj3.compareTo(obj4));
console.log(obj4.compareTo(obj1));
console.log(obj4.compareTo(obj4));
