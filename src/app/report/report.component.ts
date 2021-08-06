import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


interface Report{
  router:string;
  labeling:string;
}

@Component({
  selector: 'ns-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

   public reportList: Report[];

  constructor(
      private router: ActivatedRoute,
      private r: Router,
  ) {

  }

    ngOnInit(): void {

      this.reportList=[
          {labeling:'Number of active members', router: 'report-detail'},
          {labeling:'Most commented Comments',router: 'report-detail'},
          {labeling:'Most liked Comments',router: 'report-detail'},
          {labeling:'New posts',router: 'report-detail'}


      ];

      console.log(this.router.snapshot.params)
  }

}
