import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';

/**
 * This is the Batch component.
 * @author Anakin Kung
 */

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  users: User[] = [];  //Users array that holds all the users in the batch.
  instructors: User[] = [];  //Users array that holds all the instructors in the batch.
  creationTime: string = '';  //Creating time for the batch as a String.
  name: string = '';  //Name of the batch.
  loaded:boolean = false;  //To confirm view did load.
  id: string = "";  //ID of the batch to be used for batch service method.


  /**
   *
   * @param batchService The service this component uses.
   * @param route The route this component use to get path parameter ID.
   */
  constructor(
    private batchService:BatchService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];  //Initizlize the id field with that is given in the url path parameter.

    })
   }

  ngOnInit(): void {
    this.setUp();
  }

  /**
   * This is the basic set up method to initialize all the fields in this class with the Object received
   * from the batch service.
   */
  setUp(): void {
    this.batchService.getBatchById(this.id)
    .subscribe(batch => {
      this.instructors = batch.instructors;
      this.users = batch.users;
      var date = new Date(batch.creationTime);
      this.creationTime = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
      this.name = batch.name;
      this.loaded = true;
    })
  }

}
