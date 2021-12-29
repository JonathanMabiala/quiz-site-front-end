import { Answer } from './../../common/answer';
import { AnswerService } from './../../services/answer.service';
import { QuestionService } from './../../services/question.service';
import { Question } from './../../common/question';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  isSet:string='';
  questions: Question[] = [];
  answers!: Answer[];
  option!: string;
  answerForm!: any;
  answerTobeVerified!: string[];
  rev: string[] = [];
  result: number=0;


  constructor(private questionService: QuestionService,
    private answerService: AnswerService,
    private quizService: QuizService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onChangeRadio(value:string){
    this.isSet = value;

    console.log("Is set param : " + this.isSet);
  }

  ngOnInit(): void {
    this.getQuestionList();
    this.getAnswerList();


    // this.questionsFormGroup = this.formBuilder.group({
    //   questions: this.formBuilder.group({
    //     option: new FormControl([Validators.required]),

    //   })

    // });


  }


  onClickSubmit(data: any) {

    this.answerForm = data.value;

    let i: number = 1;

    

    while (i <= this.questions.length) {
      let el: string = "customRadio" + i;
      if (this.answerForm[el] === this.answers[i - 1].answer) {
        console.log(`Question ${i} : ${this.questions[i-1].question} is Correct.`);
        this.quizService.addReview(`Question ${i} : "${this.questions[i-1].question}" is Correct.`);
        this.result +=5;
      } else {
        console.log(`Question ${i} : "${this.questions[i-1].question}" is wrong.`);
        console.log("The correct answer is " + this.answers[i - 1].answer);

        this.quizService.addReview(`Question ${i} : "${this.questions[i-1].question}" is wrong.`);
        this.quizService.addReview("The correct answer is " + this.answers[i - 1].answer);
      }
      i++;
    }

  this.quizService.addResult(this.result);
  
   this.router.navigateByUrl("/review");


  }


  getResults() {

  }

  getQuestionList() {
    this.questionService.getQuestions().subscribe(
      data => {
        this.questions = data

      }

    );



  }


  getAnswerList() {
    this.answerService.getAnswers().subscribe(
      datas => {

        this.answers = datas

      }

    );
  }



}
