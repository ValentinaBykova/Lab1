import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-zalic-header',
  templateUrl: './my-zalic-header.component.html',
  styleUrls: ['./my-zalic-header.component.scss'],
})
export class MyZalicHeaderComponent implements OnInit {
  @Input() name: string= "Залікова робота";

  constructor() { }

  ngOnInit() {}

}
