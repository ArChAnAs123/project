import {  Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon'
import { BooklistService } from './booklist.service';
import { FormsModule } from '@angular/forms';
import { ListbooksComponent } from './listbooks/listbooks.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatExpansionModule } from '@angular/material/expansion';

import { Routes, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterServiceService } from './router-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { comment } from './comment';

const route: Routes=[
  {path:'search', component: SearchBarComponent},
   { path: '', component: LoginComponent},{path: 'home', component: DashboardComponent},{
    path: 'booklist', component: ListbooksComponent
  },{path:'favorite', component: FavoriteComponent},{path:'register', component: RegisterComponent},{path: 'appcomp', component: AppComponent},{path: 'viewbooks', component:ViewbookComponent},{path: 'rec', component: RecommendationComponent}
 
 
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ListbooksComponent,
    SearchBarComponent,
    DashboardComponent,
    ViewbookComponent,
    CommentComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,FlexLayoutModule,
    MatIconModule,FormsModule,MatCardModule,
    MatButtonModule, MatDividerModule, 
    MatFormFieldModule, MatExpansionModule, 
    RouterModule, MatDialogModule,ReactiveFormsModule,MatAutocompleteModule,RouterModule.forRoot(route)
  ],
  providers: [BooklistService,RouterServiceService, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
