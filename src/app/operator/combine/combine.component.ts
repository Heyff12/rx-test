import { Component, OnInit } from '@angular/core';
import {
  interval,
  timer,
  combineLatest,
  range,
  concat,
  Observable,
  fromEvent,
  defer,
  empty,
  of,
  from,
  bindCallback,
  merge,
  zip,
} from 'rxjs';
import { mergeMap, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.less'],
})
export class CombineComponent implements OnInit {
  combineLatestObservable: any;

  constructor() {}

  ngOnInit(): void {}
  mergeDemo(): void {
    // const clicks = fromEvent(document, 'click');
    // const timer = interval(1000);
    // const clicksOrTimer = merge(clicks, timer);
    // clicksOrTimer.subscribe((x) => console.log(x));

    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));
    const concurrent = 2; // the argument
    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe((x) => console.log(x));
  }

  zipDemo(): void {
    let age$ = of<number>(27, 25, 29);
    let name$ = of<string>('Foo', 'Bar', 'Beer');
    let isDev$ = of<boolean>(true, true, false);

    zip(age$, name$, isDev$, (age: number, name: string, isDev: boolean) => ({
      age,
      name,
      isDev,
    })).subscribe((x) => console.log(x));
    zip(age$, name$, isDev$).subscribe((x) => console.log(x));
  }

  concatDemo(): void {
    const timerOne = interval(1000);
    const sequence = range(1, 10);
    const result = concat(timerOne, sequence);
    result.subscribe((x) => console.log(x));
  }

  combineLatestDemo(): void {
    const firstTimer = timer(0, 1000); // 从现在开始，每隔1秒发出0, 1, 2...
    const secondTimer = timer(500, 1000); // 0.5秒后，每隔1秒发出0, 1, 2...
    const combinedTimers = combineLatest(firstTimer, secondTimer);
    this.combineLatestObservable = combinedTimers.subscribe((value) =>
      console.log(value)
    );
  }

  ngOnDestroy(): void {
    this.combineLatestObservable && this.combineLatestObservable.unsubscribe();
  }
}
