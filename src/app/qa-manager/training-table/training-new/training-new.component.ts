import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TrainingTableService } from '../training-table.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.css']
})
export class TrainingNewComponent implements OnInit {
  trainingForm: FormGroup;
  trainingMethods = ['Seminar','Frontal'];
 
  plannedDates = ['Q1','Q2','Q3','Q4'];
  id: number;
  

  subscription: Subscription; //
  editMode = false; // store the mode
  editedItemIndex: number; // store the 'index'

  constructor(private trService: TrainingTableService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.route.params
      .subscribe(
        (params: Params) => {
        
          
          // this.id = +params['id'];  // '+' for casting number
          //  this.editMode = params ['id'] != null; //if
          //  console.log(this.editMode);
          //  console.log("id=",this.id);
           this.initForm(); // to initialize initForm
          //  if(this.subscription){
          //    this.editMode= true;
          //  }
        }
      );

      this.subscription = this.trService.startedEditing.
      subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          console.log("editedItemIndex index= ",this.editedItemIndex)
          this.editMode = true;
      //   this.initForm();
         // console.log("index new= ",index);
          console.log("editMode=", this.editMode);
          
          //this.editedItem = this.trService.getTraining(index); //get the ingredient in index
          // this.trainin.setValue({ // set the values when clicking the item (for example apples , 5)
          //   name: this.editedItem.name,
          //   amount: this.editedItem.amount
          });
        }
      
    
     
  
  onSubmit(){
   
        
    console.log("editMode submit= ",this.editMode);
    console.log("editedItemIndex submit= ",this.editedItemIndex)
      if (this.editMode) {
        this.trService.updateTraining(this.editedItemIndex, this.trainingForm.value);
      } else {
        this.trService.addNewTableData(this.trainingForm.value);
      
      }
      this.onCancel();
    
     
     
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});

  }



  private initForm () {
    let trSubject = '';
    let trDepartment = '';
    let trPlannedDate = '';
    let trTrainingMethod = '';
    let trImpDate = '';
    let trComments = '';
    let trReviewedBy = '';
  

    /** subject
     * department
     * plannedDate
     * TrainingMethod
     * * impDate
     */
   
    if(this.editMode) {
      const training = this.trService.getTraining(this.id);
     
      trSubject = training.subject;
      trDepartment = training.department;
      trPlannedDate = training.plannedDate;
      trPlannedDate = training.plannedDate;
      trTrainingMethod = training.trainingMethod;
      trImpDate=training.impDate.toString();
      trComments = training.comments;
      trReviewedBy = training.reviewedBy;
      
    }

    this.trainingForm = new FormGroup({ 
      'subject': new FormControl(trSubject, Validators.required),
      'department': new FormControl(trDepartment, Validators.required),
      'plannedDate': new FormControl(trPlannedDate, Validators.required),
      'trainingMethod': new FormControl(trTrainingMethod, Validators.required),
      'impDate': new FormControl(new Date(trImpDate), Validators.required),
      'comments': new FormControl(trComments, Validators.required),
      'reviewedBy': new FormControl(trReviewedBy, Validators.required),
      

    });
  }


}


