// import { concatenation } from './concatenation';

// const button = document.querySelector('button')!;
// const input = document.querySelector('input')!;

// if (button && input) {
//   button.addEventListener('click', () => {
//     concatenation(input.value, 'hello!');
//   });
// }

class Employee {
  // Заповніть модифікатори доступу
 public name: string;
 private department: string;
 protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor( name: string, department: string, salary: number){
    super(name, department, salary)
    this.salary += 1000;
  }
}
const manger=new Manager("Ajax", "Business", 0)
console.log(manger.getEmployeeDetails());