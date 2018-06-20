import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-department-manager',
  templateUrl: './department-manager.component.html',
  styleUrls: ['./department-manager.component.css']
})
export class DepartmentManagerComponent implements OnInit {

  constructor(
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  
  onTrainingReport() {
    this.router.navigate(['training-report'], {relativeTo: this.route});
  }

  onTrainingTable() {
    this.router.navigate(['training-table'], {relativeTo: this.route});
  }

}
