import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalibrationService } from '../calibration.service';
import { Calibration } from '../calibration.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calibration-table',
  templateUrl: './calibration-table.component.html',
  styleUrls: ['./calibration-table.component.css']
})
export class CalibrationTableComponent implements OnInit{//,OnDestroy {

   calibrationData : Calibration[];
   subsctiption: Subscription; // store the subscription for destroy

  constructor(private calService: CalibrationService) { }

  ngOnInit() {
    this.subsctiption =  this.calService.calibrationChanged /// !!! changes if there is edit/add recipe!
    .subscribe(
      (calibrationData: Calibration[]) => {
        this.calibrationData = calibrationData;
      }
    );

    this.calibrationData = this.calService.getCalibrationData();

  }

}
