import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';




@NgModule({
  exports:[
    MenuModule,
    ToastModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
