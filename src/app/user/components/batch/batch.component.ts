import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  users: User[] = [];
  instructors: User[] = [];
  creationTime: string = '';
  name: string = '';
  loaded:boolean = false;
  id: string = "";


  constructor(
    private batchService:BatchService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    })
   }

  ngOnInit(): void {
    this.setUp();
  }

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
