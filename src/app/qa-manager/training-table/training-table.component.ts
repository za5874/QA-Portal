import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TrainingTableService } from './training-table.service';
import { Training } from './Training.model';
import { Subscription } from 'rxjs';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css']
})
export class TrainingTableComponent implements OnInit ,OnDestroy {
  TrainingTableData : Training[];
  training: Training;
  subscription: Subscription; // store the subscription for destroy
  id: number;
  trainingIndex: number;
 
   constructor(private trService: TrainingTableService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.subscription =  this.trService.newTrainingChanged /// !!! changes 
    .subscribe(
      (TrainingTableData: Training[]) => {
        this.TrainingTableData = TrainingTableData;
        }
      );
      
      this.subscription = this.trService.startedEditing.
      subscribe(
        (index: number) => {
          this.trainingIndex = index;
          //this.editMode = true;
          console.log("index training= ",index)
         
          });
        
          this.TrainingTableData = this.trService.getNewTableData(); // get the data from the form
        }  
      //////////////////////////////////////////////////////////
      // this.route.params // react to any changes in the route.params
      // .subscribe(
      //   (params: Params) => { 
      //     this.id = +params['id'];  // '+' for casting number
      //     this.training = this.trService.getTraining(this.id); // fetch the recipe id and save this (store this)
      //   //  console.log("id=",this.id);
      //     console.log("training= ",this.training);
      //   }
  
      // );
    
     
 


  onNewTraining() {
    this.router.navigate(['training-new'], {relativeTo: this.route});
  }

  onEditTraining(index: number) {
    //this.trService.startedEditing.next(index); // Pass the subject to the index
    this.router.navigate(['training-new'], {relativeTo: this.route});
    // console.log("index= ",index);
  }


  onEditItem(index: number) {
    console.log("OnEditItem-index= ",index);
    if (index != undefined){
      console.log("working!!!!!!!!");
    this.trService.startedEditing.next(index); // Pass the subject to the index
    // console.log("after startedEditing = ",this.trService.startedEditing);
    }
  }
  
  onDeleteTraining() {
    this.trService.deleteTraining(this.trainingIndex);
  
    
  }
  


  ngOnDestroy() { // for cleaning the subscription
    this.subscription.unsubscribe();
  }
} // getOnInit()
