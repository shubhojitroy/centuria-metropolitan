import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmo-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  tabTitle = 'Announcements';

  constructor() { }

  ngOnInit() {
  }

}
