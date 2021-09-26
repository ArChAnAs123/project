import { Component, Input, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from '../Book';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterServiceService } from '../router-service.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  Search!: string;
  arr1 : any;
  Itembooks: any[]=[];
  @Input() item: any;
  
  constructor(private bookservice:BooklistService, private nv: NavbarComponent , private rout:RouterServiceService) { }

 
  ngOnInit() {   
   
    this.bookservice.getPosts().subscribe((response:any) => {
      
      this.arr1 = response.items;
     
      console.log(this.arr1 );
     
    
  }, error => {
   console.log(error);
  });
   
}
    search(){
  console.log(this.nv.searchString);}


  viewbooks(list:any){
    console.log(list.volumeInfo);
    //this.rout.routeTobooks((list.volumeInfo.title,list.volumeInfo.imageLinks.thumbnail, list.volumeInfo.description, list.volumeInfo.authors, list.volumeInfo.previewLink));
    this.Itembooks.push(list.volumeInfo.title,list.volumeInfo.imageLinks.thumbnail, list.volumeInfo.description, list.volumeInfo.authors, list.volumeInfo.previewLink);
    console.log(this.Itembooks);
    this.rout.routeTobooks(this.Itembooks);
    
   }
}
