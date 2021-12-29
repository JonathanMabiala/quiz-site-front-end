
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../common/answer';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseUrl = 'http://localhost:8080/api/answers';


  constructor( private httpClient: HttpClient) { }




  getAnswers() : Observable<Answer[]>{

    return this.httpClient.get<GetAnswerResponse>(this.baseUrl).pipe(
      map( response => response._embedded.answers)
    );

  }
}
interface GetAnswerResponse{
  _embedded:{
    answers: Answer[];
  }
}
