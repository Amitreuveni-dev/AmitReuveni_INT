var professor = /** @class */ (function () {
    function professor(name, teaches) {
        this.name = name;
        this.teaches = teaches;
    }
    professor.prototype.grade = function (paper) {
        return "Grading paper " + paper;
    };
    professor.prototype.introduceSelf = function () {
        return "Hello i am professor " + this.name + ", i teach " + this.teaches + ",";
    };
    return professor;
}());
var professor1 = new professor("dr. smith", "mathematics");
console.log(professor1.grade('Amit reuveni'));
console.log(professor1.introduceSelf());
