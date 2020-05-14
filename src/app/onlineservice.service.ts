
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Online } from './online';
import { Transaction } from './transaction';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OnlineserviceService {

   private baseUrl = 'http://localhost:8089';
  
  httpService: any;
  
  online:Online;
  constructor(private http: HttpClient,private router:Router) { }

  createAccount(online :Object):Observable<Object>{
	return this.http.post(`${this.baseUrl}`+`/create`,online);
}

/*
userlogin(login:Online){
  console.log("ins service login");
  console.log(login);
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put("http://localhost:8082/Loginuser", login,  { headers, responseType: 'text'});
}*/

userlogin(online :Object):Observable<Object>{
	return this.http.put(`${this.baseUrl}`+`/Loginuser`,online,{responseType:'text'}).pipe(catchError(this.errorHandle));
}



  showBalance(accNo: number):Observable<Online>{
	return this.http.get<Online>(`${this.baseUrl}`+`/show/`+accNo).pipe(catchError(this.errorHandle));
}
  deposite(accNo: number,depositeAmount: number):Observable<Online>{
	return this.http.get<Online>(`${this.baseUrl}`+`/deposite/`+accNo+`&`+depositeAmount).pipe(catchError(this.errorHandle));
}
  get(accNo:number):Observable<Online>{
    return this.http.get<Online>(`${this.baseUrl}`+`/get/`+accNo).pipe(catchError(this.errorHandle));
}
  withdraw(accNo:number,withdrawAmount:number):Observable<Online>{
	return this.http.get<Online>(`${this.baseUrl}`+`/withdraw/`+accNo+`&`+withdrawAmount).pipe(catchError(this.errorHandle));
}
  printTransactions(accNo:number):Observable<Transaction>{
	return this.http.get<Transaction>(`${this.baseUrl}`+`/print/`+accNo).pipe(catchError(this.errorHandle));
}
  transfer(saccNo:number,raccNo:number,transferAmount:number):Observable<Online>{
	return this.http.get<Online>(`${this.baseUrl}`+`/fund/`+saccNo+`&`+raccNo+`&`+transferAmount).pipe(catchError(this.errorHandle));
}
errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || " Server Error");
  }

  public sharedId={};
}



