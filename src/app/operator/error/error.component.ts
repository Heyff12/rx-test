import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, retry, retryWhen, take } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  catchDemo(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError((err) => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe((x) => console.log(x));
  }
  catchRetryDemo(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        // take(3),
        catchError((err, caught) => caught)
      )
      .subscribe((x) => console.log(x));
  }
}
