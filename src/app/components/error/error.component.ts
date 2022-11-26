import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

/**
 * Error Component
 */
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    window.history.back();
  };

}
