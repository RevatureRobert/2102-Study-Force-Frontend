import { Component, OnInit } from '@angular/core';
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


  constructor(
    private batchService:BatchService
  ) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp(): void {
    this.batchService.getBatchById()
    .subscribe(batch => {
      this.instructors = batch.instructors;
      this.users = batch.users;
      this.creationTime = batch.creationTime;
      this.creationTime = batch.creationTime;
      this.name = batch.name;
      this.loaded = true;
    })
  }

}
