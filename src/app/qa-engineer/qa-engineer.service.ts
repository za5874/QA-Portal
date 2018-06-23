import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { report } from "./report.model";

@Injectable()
export class QaEngineerService {
    private date= new Date(2018,1,1);
    private dueDate= new Date(2020,1,1);
    reportChanged = new Subject<report[]>(); // for updateCalibration

     private reports: report[] = [new report("AA","haifa","b","q2",this.date,"a","a","a")];

  /*
    getCalibrationData() {
        return this.calibrations.slice();
    }
*/
    addReportnData(report: report) {
        // calibration.dueDateCalibration.setFullYear(calibration.dateCalibration.getFullYear()+1);
        this.reports.push(report);
        this.reportChanged.next(this.reports.slice()); // move a copy of the array of Recipes[]
        
      }


    setNextYear (date : Date) {
        date.setFullYear(date.getFullYear()+1);
        return date;
    }


}