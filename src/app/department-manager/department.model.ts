import { DepartmentMember } from "../shared/departmentMember.model";

export class Department {

    public generalSubject: string;
    public subject: string;
    public description: string;
    public trainingCoordinator: string;
    public issued: Date;
    public departmentMembers : DepartmentMember[];
    
   

    constructor(generalSubject: string,subject: string, description: string, trainingCoordinator: string,
        issued: Date, departmentMembers : DepartmentMember[]) {
        this.generalSubject = generalSubject;
        this.subject = subject;
        this.description = description;
        this.trainingCoordinator = trainingCoordinator;
        this.issued = issued;
        this.departmentMembers = departmentMembers;
    }
}