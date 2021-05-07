import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  yes: boolean = false;

  changeFocus() {
    let parent = document.getElementById('Dropdown-Button');

    if (this.yes === false) {
      this.yes = true;
      parent!.style.setProperty('border-bottom-right-radius', '0px');
      parent!.style.setProperty('border-bottom-left-radius', '0px');
    } else {
      this.yes = false;
      parent!.style.setProperty('border-bottom-right-radius', '10px');
      parent!.style.setProperty('border-bottom-left-radius', '10px');
    }
  }

  setFalse() {
    this.yes = false;
  }
}
