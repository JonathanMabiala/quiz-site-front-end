import { QuizService } from 'src/app/services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  finalReviews: string[]=[];
  finalResults: number = 0;

  constructor(private quizService:QuizService ) { }



  ngOnInit(): void {
  
    this.finalResults = this.quizService.getResult();
    this.finalReviews=[];
    for(let review of this.quizService.getReview()){
      this.finalReviews.push(review);
    }
    this.quizService.resetReview();

  }

 // console.log( "Here is the result ");
}





