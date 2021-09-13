import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieTabComponent } from './movie-tab/movie-tab.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieService } from './movie.service';
import { BaseInterceptor } from './base.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MovieTabComponent,
    MovieDetailsComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService,
    {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
