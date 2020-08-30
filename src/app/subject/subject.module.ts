import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { MainComponent } from './main/main.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';


@NgModule({
  declarations: [BehaviorSubjectComponent, MainComponent, ReplaySubjectComponent, AsyncSubjectComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
