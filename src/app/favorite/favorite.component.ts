import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { ServerService } from '../server.service';
import { RouterServiceService } from '../router-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  username!: string;
  arr1: Array<any> = [];
  arr1storing: Array<any> = [];
    arr1printing: Array<any> = [];
    deleteindex: any;
    arr:Array<any>=[];
    constructor(private routerService:RouterServiceService ,private googleApiService:BooklistService,private interService:ServerService) { }
  
    ngOnInit() {
     
  
      this.interService.getFavouriteBooks(this.username).subscribe(data=>{
  
        this.arr1=data;
        //console.log(data);
        if(data==null)
        {
          alert("Add to your favourite list and it will apeear here")
        }
        else
        {
        for (let i = 0; i < data.length; i++) {
           this.arr1[i]['bookId'];
         this.arr1[i]['username'];
           this.arr1[i]['bookTitle'];
          
       
         
          this.arr1printing.push(this.arr1storing);
          this.arr1storing = [];
        }
      }
        //console.log(this.arr1printing);
  
      },
      
      error=>{
  
        console.log(error);
      }
      
      );
    }

    deleteFromFavourites(id:any)

    {
      
     
       
     
      this.interService.deleteFromFavourites(id).subscribe((data) => {
          console.log(data);
          this.ngOnInit();
      },
        error => {
          console.log(error);
  
        });
        
  
    }
    search(term:any){
      this.googleApiService.getPosts().subscribe((response:any) => {
      
        this.arr = response.items;
       
        console.log(this.arr1 );
       
      
    }, error => {
     console.log(error);
    });
    }
      
    }
  
    

