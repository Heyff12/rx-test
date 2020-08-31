import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  interval,
  timer,
  combineLatest,
  range,
  concat,
  Observable,
  fromEvent,
} from 'rxjs';
import {} from 'rxjs/operators';

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
    this.createDemo();
    // this.debounceDemo();
  }

  intervalDemo(): void {
    const numbers = interval(1000);
    this.intervalObservable = numbers.subscribe((x) => console.log(x));
  }

  combineLatest(): void {
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
    const result = clicks.debounce(() => interval(1000));
    result.subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.intervalObservable.unsubscribe();
    this.combineLatestObservable.unsubscribe();
  }
}
