export class Employee {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;

    constructor(firstName: string, lastName: string, gender: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}