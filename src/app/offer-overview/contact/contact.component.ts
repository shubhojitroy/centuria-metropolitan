import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmo-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  tabTitle = 'Contact Details';

  constructor() { }

  ngOnInit() {
  }

}
