import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'cmo-important-information',
  templateUrl: './important-information.component.html',
  styleUrls: ['./important-information.component.scss']
})
export class ImportantInformationComponent implements OnInit {

  cardLabel = 'Important information';
  constructor() { }

  ngOnInit() {
  }

}
