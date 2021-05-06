import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnswerService } from 'src/app/flashcard/service/answer.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-submit-answer-page',
  templateUrl: './submit-answer-page.component.html',
  styleUrls: ['./submit-answer-page.component.css']
})
export class SubmitAnswerPageComponent implements OnInit {

  public text!:string;

  constructor(private form:NgForm, private answerService: AnswerService) { }

  ngOnInit(): void {
  }



  onSubmit(f:NgForm){
    if(f.invalid){
      alert("Please fill your answer");
      return
    }

    alert(this.text);
    //this.answerService.postAnswer()

  }
}


