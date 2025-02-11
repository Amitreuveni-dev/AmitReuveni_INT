class professor {
    name: string;
    teaches: string;



    constructor(name: string, teaches: string) {
        this.name = name;
        this.teaches = teaches
    }


    grade(paper: string):string {
        return `Grading paper ${paper}`;
    }

    introduceSelf(): string {
        return `Hello i am professor ${this.name}, i teach ${this.teaches},`;
    }
}

const professor1 = new professor(`dr. smith`, `mathematics`);

console.log(professor1.grade('Amit reuveni'));
console.log(professor1.introduceSelf());
