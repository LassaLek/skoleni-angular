import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-inline',
  // templateUrl: './box-inline.component.html',
  template: '<div>Inline template BOX</div>',
  // styleUrls: ['./box-inline.component.scss'],
  styles: ['div {background-color: red}']
})
export class BoxInlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
