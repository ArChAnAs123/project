import { Component, OnInit } from '@angular/core';
import { RouterServiceService } from '../router-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private rout: RouterServiceService) { }

  ngOnInit(): void {
   
  }

}
