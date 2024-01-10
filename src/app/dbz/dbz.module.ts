import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
