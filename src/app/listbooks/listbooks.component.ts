import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooklistService } from '../booklist.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterServiceService } from '../router-service.service';




@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class ListbooksComponent implements OnInit {
  constructor(private booklist: BooklistService, private rout:RouterServiceService){ }
  [x: string]: any;
  title = 'BookApp';
 key="AIzaSyCwRN-Gz5UFeVBPVGxZr8-5MMPp73bCERA";
 books: Book = new Book();
  booklis: Array<Book>=[];
  fictiondiag: Array<Book>=[];

  volumeinfo: any;
  lists:Array<any>=[];
  listsdrama:any;
  listscomedy:any;
  listslatest:any;
  listscience:any;
  listart:any;
  listthriller:any;
  listhorror:any;
  listtoprated:any;
  listphilosophy:any;
  rating:any;
  i:number=0;
  Itembook: any[]=[];
  
  queryfield!: string;
 ngOnInit(){
   
 this.queryfield="fiction";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.lists = response.items;
    for(this.i=0; this.i<this.lists.length; this.i++){
      console.log(this.lists[this.i]['volumeInfo']);}
      
      
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });

  this.queryfield="drama";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listsdrama = response.items;
      
      
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });


  this.queryfield="comedy";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listscomedy =response.items;
      
      
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });

  this.queryfield="latest";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listslatest = response.items;
      
      
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });



  this.queryfield="science";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listscience = response.items;
      
    
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });


  this.queryfield="art";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listart = response.items;
      
     
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });


  this.queryfield="horror";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listhorror = response.items;
      
     
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });

  this.queryfield="thriller";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listthriller = response.items;
      
     
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });


  this.queryfield="toprated";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listtoprated = response.items;
    
     
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });
  
  this.queryfield="philosophy";
  this.booklist.getNotes(this.queryfield).subscribe((response:any) => {
    
      this.listphilosophy = response.items;
      
     
     
    
  }, error => {
    this.errMessage = 'Http failure  404 Not Found';
  });


 


 

 }

 viewbooks(list:any){
  console.log(list.volumeInfo);
  //this.rout.routeTobooks((list.volumeInfo.title,list.volumeInfo.imageLinks.thumbnail, list.volumeInfo.description, list.volumeInfo.authors, list.volumeInfo.previewLink));
  this.Itembook.push(list.volumeInfo.title,list.volumeInfo.imageLinks.thumbnail, list.volumeInfo.description, list.volumeInfo.authors, list.volumeInfo.previewLink);
  console.log(this.Itembook);
  this.rout.routeTobooks(this.Itembook);
  
 }

}