import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Department } from "./department.model";
import { DepartmentMember } from "../shared/departmentMember.model";

@Injectable()
export class DepartmentService {

    departmentChanged = new Subject<Department[]>(); // for updateDepartment
    dateExample = new Date(2021,6,19);
    private departments: Department[] = [
        new Department('QA-100','Quality check','good','Moshe',
        this.dateExample,
        [new DepartmentMember('Head','Yossi')])
    ];


    getDepartmentData() {
        return this.departments.slice();
        
    }

    // getDepartmentMember (index: number){ // single departmentData 
    //     return this.departments[index]; // no need for slice() copy array here
     
    //    } 
    addDepartmentData(department: Department) {
        
        this.departments.push(department);
        this.departmentChanged.next(this.departments.slice()); // move a copy of the array of departments[]
        console.log(department);
        
      }
  

    

}
