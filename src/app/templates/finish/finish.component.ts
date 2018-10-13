import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cmo-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  pageTitle = 'Acknowledgement';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onReturn() {
    this.router.navigate(['/home']);
  }

}
