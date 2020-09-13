import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, range } from 'rxjs';
import { takeUntil, count, retry, retryWhen, take } from 'rxjs/operators';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.less'],
})
export class MathComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  countDemo(): void {
    const seconds = interval(1000);
    const clicks = fromEvent(document, 'click');
    const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
    const result = secondsBeforeClick.pipe(count());
    result.subscribe((x) => console.log(x));

    const numbers = range(1, 7);
    const result1 = numbers.pipe(count((i) => i % 2 === 1));
    result1.subscribe((x) => console.log(x));
  }
}
