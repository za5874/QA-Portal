import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qa-manager',
  templateUrl: './qa-manager.component.html',
  styleUrls: ['./qa-manager.component.css']
})
export class QaManagerComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onCertTable(){
    this.router.navigate(['certificationB'], {relativeTo: this.route});
  }
  onStatusTable(){
    this.router.navigate(['status-table'], {relativeTo: this.route});
  }
  onTrainingTable(){
    this.router.navigate(['training-table'], {relativeTo: this.route});
  }
}
