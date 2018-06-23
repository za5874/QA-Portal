export class Training {

    public subject: string;
    public department: string;
    public plannedDate: string;
    public TrainingMethod: string;
    public impData: Date;

    /** subject
      * department
      * plannedDate
      * TrainingMethod
      * impDate
      */

    constructor(subject: string, department: string, plannedDate: string, TrainingMethod: string,
        impData: Date) {
        this.subject = subject;
        this.department = department;
        this.plannedDate = plannedDate;
        this.TrainingMethod = TrainingMethod;
        this.impData = impData;
       
    }
}