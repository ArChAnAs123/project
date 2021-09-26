import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './Book';
import { HttpClient} from  '@angular/common/http';
import { Observable, Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  query: any;
  link:any;
  private API = 'https://www.googleapis.com/books/v1/volumes?q=';
  searchOption=[];
  public postsData: Book[] = [];
  constructor(private httpclient:HttpClient){}

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription = new Subscription;
  getNotes(queryField:string): Observable<Array<Book>> {
    this.query=queryField;
    
    //return this.httpclient.get<Array<Book>>("http://localhost:8080/book/"+this.query);
    return this.httpclient.get<Array<Book>>("https://www.googleapis.com/books/v1/volumes?q="+this.query+"&maxResults=5&orderBy=newest");

 }

 getPosts(): Observable<Book[]>{
  return this.httpclient.get<Book[]>(this.API+this.query+"+&maxResults=10&orderBy=relevance");
  
}
onFirstComponentButtonClick(name:String) {    
  this.invokeFirstComponentFunction.emit(name);    
}  




}
