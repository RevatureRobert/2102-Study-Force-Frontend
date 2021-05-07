import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { AnswerService } from 'src/app/flashcard/service/answer.service';

@Component({
  selector: 'app-submit-answer-page',
  templateUrl: './submit-answer-page.component.html',
  styleUrls: ['./submit-answer-page.component.css']
})
export class SubmitAnswerPageComponent implements OnInit {

  form: any = {
    answer: null
  };
  private userId:number = 1;
  flashcard!:Flashcard;

  constructor(private answerService: AnswerService) {
    this.flashcard = answerService.getCurrentFlashcardId();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.answer===null || this.form.answer===""){
      alert("Please fill your answer");
      return
    }

    console.log(this.form.answer);
    this.answerService.postAnswer(this.flashcard.flashcardId,this.userId,this.form.answer).then(res =>{
      console.log(res);
    }).catch(error => {
      console.log(error);
    })

  }
}


