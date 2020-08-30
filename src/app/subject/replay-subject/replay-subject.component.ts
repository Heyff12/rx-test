import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.less'],
})
export class ReplaySubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const subject = new ReplaySubject(3); // 为新的订阅者缓冲3个值

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v),
    });

    subject.next(5);

    this.setTime()
  }

  setTime() {
    console.log('--------------------------除了缓冲数量，你还可以指定 window time (以毫秒为单位)来确定多久之前的值可以记录。----------------------------------')
    const subject = new ReplaySubject(100, 500 /* windowTime */);

    const subject1 = subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
    });

    let i = 1;
    setInterval(() => subject.next(i++), 200);

    let subject2:any

    setTimeout(() => {
      subject2 = subject.subscribe({
        next: (v) => console.log('observerB: ' + v),
      });
    }, 1000);

    setTimeout(()=>{
      subject1.unsubscribe()
      subject2.unsubscribe()
    },3000)
  }
}
