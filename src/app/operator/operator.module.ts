import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { CreateComponent } from './create/create.component';
import { SwitchComponent } from './switch/switch.component';
import { FilterComponent } from './filter/filter.component';
import { CombineComponent } from './combine/combine.component';
import { MulticastComponent } from './multicast/multicast.component';
import { ToolsComponent } from './tools/tools.component';
import { BooleanComponent } from './boolean/boolean.component';
import { MathComponent } from './math/math.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    CreateComponent,
    SwitchComponent,
    FilterComponent,
    CombineComponent,
    MulticastComponent,
    ToolsComponent,
    BooleanComponent,
    MathComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, OperatorRoutingModule],
})
export class OperatorModule {}
