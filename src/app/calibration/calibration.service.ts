import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Calibration } from "./calibration.model";

@Injectable()
export class CalibrationService {
    
    calibrationChanged = new Subject<Calibration[]>(); // for updateCalibration
    private calibrations: Calibration[] = [new Calibration('1/1/2018', 'Nova', 1, 'NFZ', 20, 21, 'Pass')];


    getCalibrationData() {
        return this.calibrations.slice();
    }

    addCalibrationData(calibration: Calibration) {
        this.calibrations.push(calibration);
        this.calibrationChanged.next(this.calibrations.slice()); // move a copy of the array of Recipes[]
        
      }
    isResult( operation : number) {
        if (operation <= 18)  
        return false;
        else return true;
    }


}