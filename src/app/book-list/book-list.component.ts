import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] =[]

  constructor(private bookService: BookService){

  }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(){
    this.bookService.getAll().subscribe(response =>{
      this.books = response;
      console.log(this.books)
    })
  }


}
