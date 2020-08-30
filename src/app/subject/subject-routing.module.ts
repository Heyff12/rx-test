import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { MainComponent } from './main/main.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'behavior', // child route path
        component: BehaviorSubjectComponent, // child route component that the router renders
      },
      {
        path: 'replay',
        component: ReplaySubjectComponent,
      },
      {
        path: 'async',
        component: AsyncSubjectComponent,
      },
      {
        path: '',
        redirectTo: 'behavior',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModule {}
