import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "http://localhost:8080/api/book"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }
}
