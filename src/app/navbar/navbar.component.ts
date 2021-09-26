import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Book } from '../Book';
import { BooklistService } from '../booklist.service';
import { RouterServiceService } from '../router-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myControl = new FormControl();
 
 
  search : String ="";
  @Input()
  book:any;
  
  @Output() tableDataValues=new EventEmitter<any>();  
  searchString = "";
  constructor (private bookService: BooklistService, private roturs: RouterServiceService) {}

  

  ngOnInit() {

  
    
  }

 
  Submit(searchString:String){
    this.roturs.routeToSearch();
    this.bookService.getNotes(this.searchString).subscribe((response:any) => {
      
      this.book = response;
     
    
     
    
  }, error => {
   console.log(error);
  });
      

  }

  

  firstComponentFunction(searchString: String){   
    this.search =searchString; 
    this.bookService.onFirstComponentButtonClick(this.search);    
  }   

}
