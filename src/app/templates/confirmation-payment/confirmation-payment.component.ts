import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'cmo-confirmation-payment',
  templateUrl: './confirmation-payment.component.html',
  styleUrls: ['./confirmation-payment.component.scss']
})
export class ConfirmationPaymentComponent implements OnInit {

  pageTitle = 'Confirmation of Application Registration';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFinish() {
    this.router.navigate(['/finish']);
  }

  print() {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          body {
            margin:0;
            padding:0;
            line-height: 1.4em; word-spacing:1pt; letter-spacing:0.2px; font: 10pt Arial, Helvetica,"Lucida Grande", serif; color: #000;
          }
          </style>
        </head>
        <body onload="window.print();window.close()">${ printContents }</body>
      </html>`
    );
    popupWin.document.close();
  }

}
