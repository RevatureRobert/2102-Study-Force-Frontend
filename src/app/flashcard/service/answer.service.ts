import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AnswerDTO } from '../model/answer-dto';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  private headerInfo = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Content-Type',
    //'Authorization': 'Bearer '.concat(JWT.currentJWT)
  };

  async postAnswer(flashcardId: number, userId: number, answer: string ): Promise<any>{

    let answerDTO = new AnswerDTO();
    answerDTO.userId= userId;
    answerDTO.flashcardId= flashcardId;
    answerDTO.answer = answer;

    return await this.http.post(environment.apiUrl+"/answers/",answerDTO,{headers:this.headerInfo}).toPromise();
  }

}
