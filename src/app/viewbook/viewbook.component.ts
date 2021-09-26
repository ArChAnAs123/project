import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';

import { BooklistService } from '../booklist.service';
import { RouterServiceService } from '../router-service.service';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  errMessage: string=" ";
  queryfield: string=" ";
  value:any;
  b:any;
  bobj= new Book();
  constructor(private booklist: BooklistService, private r:RouterServiceService, private sever:ServerService) { }
 Item:any[]=[];
  ngOnInit(): void {

    
  
  
    this.value=this.r.getItems();
    console.log(this.value);
    this.Item.push(this.value);

  
  }
  fav(booksval:any){
    alert("added");
    this.bobj.title=booksval;
    this.sever.addFavouriteBooks(this.bobj);

  }
 
}
