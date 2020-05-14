import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private onlineservice:OnlineserviceService,private router: Router) { }

  ngOnInit() {
  }

}
