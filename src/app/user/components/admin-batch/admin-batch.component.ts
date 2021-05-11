import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';


/**
 * This is the Admin Batch View component.
 * @author Anakin Kung
 */
@Component({
  selector: 'app-admin-batch',
  templateUrl: './admin-batch.component.html',
  styleUrls: ['./admin-batch.component.css']
})
export class AdminBatchComponent implements OnInit {

  users: User[] = [];  //Users array that holds all the users in the batch.
  instructors: User[] = [];  //Users array that holds all the instructors in the batch.
  creationTime: string = '';  //Creating time for the batch as a String.
  name: string = '';  //Name of the batch.
  loaded:boolean = false;  //To confirm view did load.
  id: string = "";  //ID of the batch to be used for batch service method.
  // link: string = "";


  /**
   *
   * @param batchService The service this component uses.
   * @param route The route this component use to get path parameter ID.
   * @param router The router this component use to route to a different component.
   */
  constructor(
    private batchService:BatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // This takes in the id parameter from the path and stores it in this.id field.
    this.route.params.subscribe(params => {
      this.id = params['id'];

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
      // this.link = `adminBatchEditDetails/${this.id}`;
      this.loaded = true;
    })
  }

  /**
   * This is to redirect the admin to the page to edit the details for the batch.
   */
  editButtonClicked(): void {
    this.router.navigateByUrl(`adminBatchEditDetails/${this.id}`) ;
  }
}
