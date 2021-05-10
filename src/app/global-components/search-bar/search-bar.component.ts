import { Component, OnInit } from '@angular/core';
import {SearchContentService} from '../search-content.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  output = '';
  subscription!: Subscription;

  constructor(private data: SearchContentService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.output = message);
  }

  ngOnDestroy = (): void => {
    this.subscription.unsubscribe();
  }

  updateSearch(message: string): void {
    this.data.changeMessage(message);
  }

}
