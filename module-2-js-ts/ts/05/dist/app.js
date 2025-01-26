var employees = [
    {
        firstName: "amit",
        lastName: "reuveni",
        department: "marketing",
        sallery: 2000
    },
    {
        firstName: "sarah",
        lastName: "cohen",
        department: "sales",
        sallery: 2500
    },
    {
        firstName: "david",
        lastName: "levi",
        department: "QA",
        sallery: 1500
    },
    {
        firstName: "adi",
        lastName: "israeli",
        department: "finance",
        sallery: 2700
    },
    {
        firstName: "yoav",
        lastName: "goldman",
        department: "engineering",
        sallery: 3000
    },
];
employees.forEach(function (employee) {
    alert(employee.firstName + " " + employee.lastName + "\n" + employee.department + "\n" + employee.sallery);
});
// const nameParts = newName?.split(" ") ?? [person1.firstName, person1.lastName];
// ?. - conditional chaining ("elvis")
// exp1?.exp2 === ((exp1 === null || exp1 === undefined) ? undefined : exp1.exp2)
// ?? - nullish coalescing (binary)
// (exp1 ?? exp2) === (exp1 == null ? exp2 : exp1)
