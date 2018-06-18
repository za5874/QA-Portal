export class Department {

    public generalSubject: string;
    public subject: string;
    public description: string;
    public trainingCoordinator: string;
    public issued: Date;
    
    // 'generalSubject': new FormControl(trGeneralSubject, Validators.required),
    // 'subject': new FormControl(trSubject, Validators.required),
    // 'description': new FormControl(trDescription, Validators.required),
    // 'trainingCoordinator': new FormControl(trTrainingCoordinator, Validators.required),
    // 'issued': new FormControl(new Date(trIssued), Validators.required)


    constructor(generalSubject: string,subject: string, description: string, trainingCoordinator: string,
        issued: Date) {
        this.generalSubject = generalSubject;
        this.subject = subject;
        this.description = description;
        this.trainingCoordinator = trainingCoordinator;
        this.issued = issued;
        
    }
}