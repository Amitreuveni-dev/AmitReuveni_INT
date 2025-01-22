type person = {
    firstName: string;
    lastName: string;
    department: string;
    sallery: number;
};

const employees: person[] = [
    {
        firstName: "amit",
        lastName: "reuveni",
        department: "marketing",
        sallery: 2000,
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

employees.forEach(employee => {

    alert(`${employee.firstName} ${employee.lastName}\n${employee.department}\n${employee.sallery}`);
});
