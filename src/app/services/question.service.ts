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

  getQuestion(theQuestionId: number): Observable<Question> {

    // Need to build URL on Product id
    const questionUrl = `${this.baseUrl}/${theQuestionId}`;

    return this.httpClient.get<GetQuestionResponse>(questionUrl).pipe(
      map(response => response._embedded.question)
    );

  }

  getQuestions() : Observable<Question[]>{

    return this.httpClient.get<GetQuestionsResponse>(this.baseUrl).pipe(
      map( response => response._embedded.questions)
    );

  }







}

interface GetQuestionsResponse{
  _embedded:{
    questions: Question[];
  }
}

interface GetQuestionResponse{
  _embedded:{
    question: Question;
  }
}
