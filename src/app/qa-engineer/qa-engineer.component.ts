import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qa-engineer',
  templateUrl: './qa-engineer.component.html',
  styleUrls: ['./qa-engineer.component.css']
})
export class QaEngineerComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  onCertTable(){
    this.router.navigate(['certiication'], {relativeTo: this.route});
  }
}
