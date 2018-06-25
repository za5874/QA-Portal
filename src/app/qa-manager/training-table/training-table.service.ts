import { Injectable } from "@angular/core";
import { Training } from "./Training.model";
import { Subject } from "rxjs";


@Injectable()
export class TrainingTableService {
    
    startedEditing = new Subject<number>();
    newTrainingChanged = new Subject<Training[]>(); // for updateTraining
     
    date= new Date(2019,6,1);   
       
    private trainings: Training[] = [new Training('Incoming','QA','Q2','Seminar',this.date,'comment','mosheB')]
   
    getNewTableData() {
        return this.trainings.slice();
    }
   
    getTraining (index: number){
        return this.trainings[index]; // no need for slice() copy array here
     
       }
    addNewTableData(training: Training) {
        this.trainings.push(training);
        this.newTrainingChanged.next(this.trainings.slice()); 
        console.log("Training new= ",this.trainings);
      //  console.log("newTrainingChanged= ",this.newTrainingChanged);
        
      }

      updateTraining(index: number, newTraining: Training){
        this.trainings[index]= newTraining;
       // this.newTrainingChanged.next(this.trainings.slice());
    }

  

      deleteTraining (index: number) {
        this.trainings.splice(index, 1); // splice is for starting from the index of the element and '1' for how many to remove
        this.newTrainingChanged.next(this.trainings.slice()); // slice for pass a copy of my trainings
    }

}