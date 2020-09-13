import { Component, OnInit, OnDestroy } from '@angular/core';
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
} from 'rxjs';
import { mergeMap, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
})
export class CreateComponent implements OnInit, OnDestroy {
  intervalObservable: any;
  combineLatestObservable: any;
  constructor() {}

  ngOnInit(): void {
    // this.intervalDemo()
    // this.combineLatest();
    // this.concatDemo();
    // this.createDemo();
    // this.debounceDemo();
  }

  intervalDemo(): void {
    const numbers = interval(1000);
    this.intervalObservable = numbers.subscribe((x) => console.log(x));
  }

  combineLatestDemo(): void {
    const firstTimer = timer(0, 1000); // 从现在开始，每隔1秒发出0, 1, 2...
    const secondTimer = timer(500, 1000); // 0.5秒后，每隔1秒发出0, 1, 2...
    const combinedTimers = combineLatest(firstTimer, secondTimer);
    this.combineLatestObservable = combinedTimers.subscribe((value) =>
      console.log(value)
    );
  }

  concatDemo(): void {
    const timerOne = interval(1000);
    const sequence = range(1, 10);
    const result = concat(timerOne, sequence);
    result.subscribe((x) => console.log(x));
  }

  createDemo(): void {
    const observable = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    observable.subscribe(
      (value) => console.log(value),
      (err) => {},
      () => console.log('this is the end')
    );
  }

  debounceDemo(): void {
    const clicks = fromEvent(document, 'click');
    // const result = clicks.debounce(() => interval(1000));
    // result.subscribe((x) => console.log(x));
  }

  deferDemo(): void {
    const clicksOrInterval = defer(() => {
      if (Math.random() > 0.5) {
        return fromEvent(document, 'click');
      } else {
        return interval(1000);
      }
    });
    clicksOrInterval.subscribe((x) => console.log(x));
  }

  emptyDemo(): void {
    const intervalO = interval(1000);
    const result = intervalO.pipe(
      mergeMap((x) =>
        x % 2 === 1 ? of('a', 'b', 'c') : empty().pipe(startWith(7))
      )
    );
    result.subscribe((x) => console.log(x));
  }

  fromDemo(): void {
    function* generateDoubles(seed) {
      let i = seed;
      while (true) {
        yield i;
        i = 2 * i; // double it
      }
    }

    const iterator = generateDoubles(3);
    const result = from(iterator).pipe(take(10));
    result.subscribe((x) => console.log(x));
  }
  ngOnDestroy(): void {
    this.intervalObservable.unsubscribe();
    this.combineLatestObservable.unsubscribe();
  }
}
