import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flashcard } from 'src/app/flashcard/model/flashcard';
import { AnswerService } from 'src/app/flashcard/service/answer.service';
import { FlashcardService } from 'src/app/flashcard/service/flashcard.service';

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
  flashcardDifficulty?:string;

  constructor(private answerService: AnswerService, private flashcardService: FlashcardService, private router: Router) {

  }

  ngOnInit(): void {
    let flashcardId = this.answerService.getCurrentFlashcardId();
    this.flashcardService.getFlashcardById(flashcardId).then(response =>{
      console.log(response);
      this.flashcard = response;

      switch (this.flashcard.difficulty) {
        case 0:
            this.flashcardDifficulty = "Easy";
          break;
        case 1:
            this.flashcardDifficulty = "Medium";
          break;
        case 2:
            this.flashcardDifficulty = "Hard";
          break;
        default:
          break;
      }

    }).catch(exception =>{
      console.log(exception);
    })
  }

  onSubmit(){
    if(this.form.answer===null || this.form.answer===""){
      alert("Please fill your answer");
      return
    }

    console.log(this.form.answer);
    this.answerService.postAnswer(this.flashcard.flashcardId,this.userId,this.form.answer).then(res =>{
      console.log(res);
      this.router.navigate(["/view-flashcards"]);
    }).catch(error => {
      console.log(error);
    })

  }
}


