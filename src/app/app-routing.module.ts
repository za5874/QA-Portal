import { NgModule, Injectable } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { CalibrationComponent } from "./calibration/calibration.component";
import { HomeComponent } from "./home/home.component";
import { DepartmentManagerComponent } from "./department-manager/department-manager.component";
//import { QaEngineerComponent } from "./qa-engineer/qa-engineer.component";
import { QaManagerComponent } from "./qa-manager/qa-manager.component";
import { StatusTableComponent } from "./qa-manager/status-table/status-table.component";
import { TrainingTableComponent } from "./qa-manager/training-table/training-table.component";
import { Certification2Component } from "./qa-manager/certification/certification.component";
import { MarketerComponent } from "./marketer/marketer.component";
import { CalibrationFileComponent } from "./calibration/calibration-file/calibration-file.component";
import { TrainingReportComponent } from "./department-manager/training-report/training-report.component";
import { Certification1Component } from "./qa-engineer/certification/certification.component";
import { QaEngineerComponent } from "./qa-engineer/qa-engineer.component";
import { StatusReportComponent } from "./qa-engineer/status-report/status-report.component";
//import { HomeComponent } from "./core/home/home.component";


const appRoutes: Routes = [
    { path: '', component: SigninComponent },//redirectTo: '/recipes', pathMatch: 'full' },
    // { path: '', component: HomeComponent },//redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'calibration', component: CalibrationComponent },
    { path: 'calibration/calibrationfile', component: CalibrationFileComponent },
    { path: 'department-manager', component: DepartmentManagerComponent, children: [
        { path: 'training-report', component: TrainingReportComponent},
    ] },
    { path: 'qa-engineer', component: QaEngineerComponent, children: [
        { path: 'certificationA', component: Certification1Component},
        { path: 'status-report', component: StatusReportComponent},
    ] },

    { path: 'qa-manager', component: QaManagerComponent, children: [
        {path: 'status-table', component: StatusTableComponent},
        {path: 'training-table', component: TrainingTableComponent},
        { path: 'certificationB', component: Certification2Component},
    ] },
    { path: 'marketer', component: MarketerComponent }
    
   

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // import the routes
    exports: [RouterModule]  // for export our routing module for
    // importing this routing module in another module
    // Now we need to write AppRoutingModule in the app.module.ts > imports
    // and in the app.html put <router-outlet>

})


export class AppRoutingModule {

}
