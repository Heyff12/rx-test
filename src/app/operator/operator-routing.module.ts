import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { SwitchComponent } from './switch/switch.component';
import { FilterComponent } from './filter/filter.component';
import { CombineComponent } from './combine/combine.component';
import { MulticastComponent } from './multicast/multicast.component';
import { ToolsComponent } from './tools/tools.component';
import { BooleanComponent } from './boolean/boolean.component';
import { MathComponent } from './math/math.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'switch',
    component: SwitchComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'combine',
    component: CombineComponent,
  },
  {
    path: 'multicst',
    component: MulticastComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'tools',
    component: ToolsComponent,
  },
  {
    path: 'boolean',
    component: BooleanComponent,
  },
  {
    path: 'math',
    component: MathComponent,
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorRoutingModule {}
