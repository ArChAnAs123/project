import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  deleteFromFavourites(id:any):Observable<any> {
   
    return this.httpClient.delete<any>(`http://localhost:3000/favourites/${id}`);
  }

  flag:boolean=false;
  bookId:string=" ";
  arr:Array<any>=[];
  input:string=" ";
  private baseUrl = 'http://localhost:8085/api/bookApp';

  constructor(private httpClient: HttpClient) { }
  getFavouriteBooks(username:any): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(` http://localhost:3000/favourites`);
  }

  addFavouriteBooks(book:Book): Observable<Array<Book>> {
    console.log(book);
    return this.httpClient.post<Book[]>(`http://localhost:3000/favourites`,book);
  }

  getRecommendedBook(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`http://localhost:3000/recommendedBooks`);
  }

  addBookToRecom(book:any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:3000/recommendedBooks`,book);
  }
}
