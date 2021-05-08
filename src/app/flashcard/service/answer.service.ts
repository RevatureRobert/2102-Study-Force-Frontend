import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AnswerDTO } from '../model/answer-dto';
import { environment } from '../../../environments/environment'
import { Flashcard } from '../model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private flashcardId!:number;

  constructor(private http: HttpClient) { }

  private headerInfo = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Content-Type',
    //'Authorization': 'Bearer '.concat(JWT.currentJWT)
  };

  setCurrentFlashcardId(flashcardId:number):void{
    this.flashcardId=flashcardId;
  }

  getCurrentFlashcardId():number{
    return this.flashcardId;
  }

  async postAnswer(flashcardId: number, userId: number, answer: string ): Promise<any>{

    let answerDTO = new AnswerDTO();
    answerDTO.userId= userId;
    answerDTO.flashcardId= flashcardId;
    answerDTO.answer = answer;

    return await this.http.post('http://'+environment.apiUrl+"/answers/",answerDTO,{headers:this.headerInfo}).toPromise();
  }

}
