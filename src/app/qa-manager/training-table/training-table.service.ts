import { Injectable } from "@angular/core";
import { Training } from "./Training.model";
import { Subject } from "rxjs";


@Injectable()
export class TrainingTableService {

     date= new Date(2019,6,1);   
    newTrainingChangerd = new Subject<Training[]>(); // for updateCalibration
    
    private trainings: Training[] = [new Training('Incoming','QA','Q2','Seminar',this.date)]
   
    getNewTableData() {
        return this.trainings.slice();
    }

    addNewTableData(training: Training) {
        this.trainings.push(training);
        this.newTrainingChangerd.next(this.trainings.slice()); 
        console.log(this.trainings);
        
      }

}