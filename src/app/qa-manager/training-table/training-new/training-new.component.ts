import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TrainingTableService } from '../training-table.service';


@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.css']
})
export class TrainingNewComponent implements OnInit {
  newTrainingForm: FormGroup;
  trainingMethods = ['Seminar','Frontal'];
  plannedDates = ['Q1','Q2','Q3','Q4'];

  constructor(private trService: TrainingTableService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          //this.id = +params['id']; // pass dynamically the recipe
          //this.editMode = params ['id'] != null; //if
          this.initForm(); // to initialize initForm
          //console.log(this.editMode);


        }
      )
  }



  onSubmit(){
   
      this.trService.addNewTableData(this.newTrainingForm.value);
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
  

    /** subject
     * department
     * plannedDate
     * TrainingMethod
     * * impDate
     */
   

    this.newTrainingForm = new FormGroup({ 
      'subject': new FormControl(trSubject, Validators.required),
      'department': new FormControl(trDepartment, Validators.required),
      'plannedDate': new FormControl(trPlannedDate, Validators.required),
      'trainingMethod': new FormControl(trTrainingMethod, Validators.required),
      'impDate': new FormControl(new Date(trImpDate), Validators.required),
      

    });
  }


}


