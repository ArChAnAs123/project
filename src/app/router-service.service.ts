import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {
  constructor(private router: Router) { }
  bookitem:any[]=[];
  routeToSearch() {
       this.router.navigate(['search']);
  }

  routeToLogin() {
    this.router.navigate(['']);
  }
  routeToRegister() {
    this.router.navigate(['register']);
  }


  routeToBooklist(){
    this.router.navigate(['booklist']);
  }
  routeTohome(){
    this.router.navigate(['appcomp']);
  }
  routeToDashboard(){
    this.router.navigate(['home']);
  }
  routeTofavorite(){
    this.router.navigate(['favorite']);
  }
  routeToRecommend(){
    this.router.navigate(['rec']);
  }
  routeTobooks(bk:any[]){
    this.router.navigate(['viewbooks']);
    this.bookitem.push(bk[0],bk[1],bk[2],bk[3],bk[4]);
    console.log(bk[0]);
  }
  
  getItems(){
    
    return this.bookitem;

  }
  
}
