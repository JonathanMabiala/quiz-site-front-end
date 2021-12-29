import { Question } from './../common/question';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = 'http://localhost:8080/api/questions';


  constructor( private httpClient: HttpClient) { }


  getQuestions() : Observable<Question[]>{

    return this.httpClient.get<GetQuestionResponse>(this.baseUrl).pipe(
      map( response => response._embedded.questions)
    );

  }





}

interface GetQuestionResponse{
  _embedded:{
    questions: Question[];
  }
}
