import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CalibrationComponent } from './calibration/calibration.component';
import { DepartmentManagerComponent } from './department-manager/department-manager.component';
import { QaEngineerComponent } from './qa-engineer/qa-engineer.component';
import { QaManagerComponent } from './qa-manager/qa-manager.component';
import { MarketerComponent } from './marketer/marketer.component';
import { CalibrationTableComponent } from './calibration/calibration-table/calibration-table.component';
import { CalibrationFileComponent } from './calibration/calibration-file/calibration-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CalibrationService } from './calibration/calibration.service';
import { TrainingReportComponent } from './department-manager/training-report/training-report.component';
import { Certification1Component } from './qa-engineer/certification/certification.component';
import { StatusReportComponent } from './qa-engineer/status-report/status-report.component';

import { DepartmentService } from './department-manager/department.service';

import { StatusTableComponent } from './qa-manager/status-table/status-table.component';
import { TrainingTableComponent } from './qa-manager/training-table/training-table.component';
import { Certification2Component } from './qa-manager/certification/certification.component';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    CalibrationComponent,
    DepartmentManagerComponent,
    QaEngineerComponent,
    QaManagerComponent,
    MarketerComponent,
    CalibrationTableComponent,
    CalibrationFileComponent,
    TrainingReportComponent,
    Certification1Component,
    StatusReportComponent,
    StatusTableComponent,
    TrainingTableComponent,
    Certification2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [CalibrationService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
