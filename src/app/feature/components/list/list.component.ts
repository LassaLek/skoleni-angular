import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // can be bound to different name
  @Input(/*'list-item'*/) item: string = 'DEFAULT';
  @Output() clickEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickEmitter.emit()
  }

}
