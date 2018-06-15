import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CalibrationService } from '../calibration.service';

@Component({
  selector: 'app-calibration-file',
  templateUrl: './calibration-file.component.html',
  styleUrls: ['./calibration-file.component.css']
})
export class CalibrationFileComponent implements OnInit {
  calibrationForm: FormGroup;
  @ViewChild('f') slForm: NgForm; // to get to the #f in the .html
  constructor(private calService: CalibrationService ,private route: ActivatedRoute,
    private router: Router) {}
    
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

  onSubmit(form: NgForm) {
    this.calService.addCalibrationData(this.calibrationForm.value);
    // if (this.calService.isResult()) console.log("pass");
    // else console.log("false");
    if (this.calService.isResult(this.calibrationForm.value.operation))
    {
      this.calibrationForm.value.result = "Pass";
    }
    else this.calibrationForm.value.result = "Fail";
    
    
    this.onCancel(); // returning to calibrtaion table
    
  }
  
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});

  }


private initForm () {
    let calDateCalibration = '';
    let calToolName = '';
    let calSerialNum = '';
    let calManufacturer = '';
    let calStandard = '';
    let calOperation = '';
    let calResult = '';
   

    this.calibrationForm = new FormGroup({ 
      'dateCalibration': new FormControl(calDateCalibration, Validators.required),
      'toolName': new FormControl(calToolName, Validators.required),
      'serialNum': new FormControl(calSerialNum, Validators.required),
      'manufacturer': new FormControl(calManufacturer, Validators.required),
      'standard': new FormControl(calStandard, Validators.required),
      'operation': new FormControl(calOperation, Validators.required),
    //  'result': new FormControl(calResult, Validators.required)
      
    //  'ingredients' : recipeIngredients // because it is formArray

    });
  }
}
