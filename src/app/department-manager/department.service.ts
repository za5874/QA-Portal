import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Department } from "./department.model";

@Injectable()
export class DepartmentService {

    departmentChanged = new Subject<Department[]>(); // for updateDepartment
    private departments: Department[]; //= [new Calibration(this.date,this.dueDate, 'Nova', 1, 'NFZ', 20, 21, 'Pass')];


    getDepartmentData() {
        return this.departments.slice();
    }

    addDepartmentData(department: Department) {
        
        this.departments.push(department);
        this.departmentChanged.next(this.departments.slice()); // move a copy of the array of departments[]
        
      }
  

    

}
