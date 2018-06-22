import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QaEngineerService } from '../qa-engineer.service'; 

@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.css']
})
export class StatusReportComponent implements OnInit {
  reportForm: FormGroup;
  dueDate = new Date();
  @ViewChild('f') slForm: NgForm; // to get to the #f in the .html


  constructor(
    private calService: QaEngineerService,
    private route: ActivatedRoute,
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
  }
  
 /* onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }*/

private initForm () {
    let calVendorName= '';
    let calLocation = '';
    let calSupplierClass = '';
    let calAuditPlannedQuarter = '';
    let calLastAuditDate = '';
    let calNewVendorApproval = '';
    let calOperation = '';
    let calSupplierCertificationDescription = '';
    let calAuditorName = '';
   

    this.reportForm = new FormGroup({ 
      'vendorName': new FormControl(new Date(calVendorName), Validators.required),
      'duelocation': new FormControl(new Date(calLocation), Validators.required),
      'supplierClass': new FormControl(calSupplierClass, Validators.required),
      'auditPlannedQuarter': new FormControl(calAuditPlannedQuarter, Validators.required),
      'lastAuditDate': new FormControl(calLastAuditDate, Validators.required),
      'newVendorApproval': new FormControl(calNewVendorApproval, Validators.required),
      'supplierCertificationDescription': new FormControl(calSupplierCertificationDescription, Validators.required),
      'auditorName': new FormControl(calAuditorName, Validators.required),
    //  'result': new FormControl(calResult, Validators.required)
    //  'ingredients' : recipeIngredients // because it is formArray

    });   
  }
}
