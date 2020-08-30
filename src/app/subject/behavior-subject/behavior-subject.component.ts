import { Component, OnInit } from '@angular/core';
import { BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.less'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const subject = new BehaviorSubject(0); // 0是初始值

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v),
    });

    subject.next(3);
    subject.next(4);
  }
}
