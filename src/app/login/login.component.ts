import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { Router } from '@angular/router';
import { Online } from '../online';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string;
online:Online=new Online();

  constructor(private onlineservice:OnlineserviceService,private router: Router)
  
  {}
 

ngOnInit(): void {
}
onSubmit(login:Online):any{
  console.log(login);
  
  this.onlineservice.userlogin(login).subscribe(data=>

    console.log(data),
    error=>console.log("error occured ",error)
  );
    this.router.navigate(['/loginsuccess'])
}   // this.onlineservice.sharedId=login.accNo;

}
