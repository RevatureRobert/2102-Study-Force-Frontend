import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AnswerDTO } from '../model/answer-dto';
import { environment } from '../../../environments/environment'
import { Flashcard } from '../model/flashcard';

/**
 * Provides methods for passing Flashcard objects between the frontend and backend
 */
@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  /**
   * the id of the flashcard associated with an answer
   */
  private flashcardId!:number;

   /**
   * @param http - handles HTTP requests
   */
  constructor(private http: HttpClient) { }

  private headerInfo = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //'Access-Control-Allow-Headers': 'Content-Type',
    //'Authorization': 'Bearer '.concat(JWT.currentJWT)
  };

  setCurrentFlashcardId(flashcardId:number):void{ // setter for flashcardId
    this.flashcardId=flashcardId;
  }

  getCurrentFlashcardId():number{                 // getter for flashcardId
    return this.flashcardId;
  }

  /**
   * Persists an answer to the database
   * @param flashcardId the answer's associated flashcard
   * @param userId the answer's associated user
   * @param answer the text body of the user's inputted answer
   * @returns the persisted answer
   */
  async postAnswer(flashcardId: number, userId: number, answer: string ): Promise<any>{

    let answerDTO = new AnswerDTO();
    answerDTO.userId= userId;
    answerDTO.flashcardId= flashcardId;
    answerDTO.answer = answer;

    return await this.http.post('http://'+environment.apiUrl+"/answers/",answerDTO,{headers:this.headerInfo}).toPromise();
  }

}
