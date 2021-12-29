import { QuizService } from './services/quiz.service';
import { AnswerService } from './services/answer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuestionService } from './services/question.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { QuestionsFormComponent } from './components/questions-form/questions-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './components/review/review.component';
import { ResultsComponent } from './components/results/results.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =[

  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuestionsFormComponent},
  {path: 'review', component: ReviewComponent},
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    QuestionsFormComponent,
    ReviewComponent,
    ResultsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
  
   
  ],

  providers: [QuestionService,{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
