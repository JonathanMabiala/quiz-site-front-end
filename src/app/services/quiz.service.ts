import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  results: number=0;
  //review: Subject<string> = new BehaviorSubject<string>("");
  review : string[] = [];

  

  constructor(httpClient: HttpClient) { }


  addReview(r:string){
    //Add the review of your quiz
    this.review.push(r);

  }

  addResult(result:number){
    //Add the review of your quiz
    this.results = result;

  }

  getReview(){
    //Add the review of your quiz
    return this.review;

  }

  resetReview(){
    this.review = [];
  }

  getResult(){
    //Add the review of your quiz
    return this.results;

  }
}
