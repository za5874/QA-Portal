export class Training {

    public subject: string;
    public department: string;
    public plannedDate: string;
    public trainingMethod: string;
    public impDate: Date;
    public comments: string;
    public reviewedBy: string;

    /** subject
      * department
      * plannedDate
      * TrainingMethod
      * impDate
      */

    constructor(subject: string, department: string, plannedDate: string, trainingMethod: string,impDate: Date,
         comments: string, reviewedBy: string ) {
        this.subject = subject;
        this.department = department;
        this.plannedDate = plannedDate;
        this.trainingMethod = trainingMethod;
        this.impDate = impDate;
        this.comments= comments;
        this.reviewedBy=reviewedBy;
       
    }
}