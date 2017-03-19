import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  @Input() title: string = '';
  @Input() options: string[] = [];
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
