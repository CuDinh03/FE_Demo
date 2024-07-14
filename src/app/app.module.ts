import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModel } from "./app.routing.module";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations:[
        AppComponent,
        BookListComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModel,
        RouterOutlet
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}