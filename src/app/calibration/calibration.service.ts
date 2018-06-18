import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Calibration } from "./calibration.model";

@Injectable()
export class CalibrationService {
    private date= new Date(2018,1,1);
    private dueDate= new Date(2020,1,1);
    calibrationChanged = new Subject<Calibration[]>(); // for updateCalibration

    private calibrations: Calibration[] = [new Calibration(this.date,this.dueDate, 'Nova', 1, 'NFZ', 20, 21, 'Pass')];


    getCalibrationData() {
        return this.calibrations.slice();
    }

    addCalibrationData(calibration: Calibration) {
        // calibration.dueDateCalibration.setFullYear(calibration.dateCalibration.getFullYear()+1);
        this.calibrations.push(calibration);
        this.calibrationChanged.next(this.calibrations.slice()); // move a copy of the array of Recipes[]
        
      }
    isResult( result : number) {
        if (result < -2 || result >2)  
        return false;
        else return true;
    }

    setNextYear (date : Date) {
        date.setFullYear(date.getFullYear()+1);
        return date;
    }


}