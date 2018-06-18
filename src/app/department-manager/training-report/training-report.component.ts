import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DepartmentService } from '../department.service';



@Component({
  selector: 'app-training-report',
  templateUrl: './training-report.component.html',
  styleUrls: ['./training-report.component.css']
})

export class TrainingReportComponent implements OnInit {
  trainingForm: FormGroup;




  constructor(private depService: DepartmentService,private route: ActivatedRoute,
    private router: Router) { }

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

  onSubmit() {
    this.depService.addDepartmentData(this.trainingForm.value);
  
    this.onCancel();
  }
    onCancel() { 
      this.router.navigate(['../'], {relativeTo: this.route});

    }
  
  
  private initForm() {

    let trGeneralSubject = '';
    let trSubject = '';
    let trDescription = '';
    let trTrainingCoordinator = '';
    let trIssued = '';

    this.trainingForm = new FormGroup({

      'generalSubject': new FormControl(trGeneralSubject, Validators.required),
      'subject': new FormControl(trSubject, Validators.required),
      'description': new FormControl(trDescription, Validators.required),
      'trainingCoordinator': new FormControl(trTrainingCoordinator, Validators.required),
      'issued': new FormControl(new Date(trIssued), Validators.required)

    });
  }
}
