import {Component, OnInit} from "@angular/core";
import {EmployeeService} from "./shared/employee.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Employee} from "./shared/employee";

@Component({
    selector: 'sa-employee',
    templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {

    constructor(private employeeService: EmployeeService) { }

    employees: Employee[] = [];
   // postForm: FormGroup;

    ngOnInit() {
        this.employeeService.getEmployees().subscribe(next => (this.employees = next), error => (this.employees= []))
    }

    // deleteProduct(i){
    //     const employee = this.employees[i];
    //     this.employeeService.deleteProduct(employee.id).subscribe(() =>
    //         this.employees = this.employees.filter(t => t.id !== employee.id));
    //
    // }

}