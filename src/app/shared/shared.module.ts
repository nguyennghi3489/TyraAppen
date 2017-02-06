import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, CardListComponent],
  exports:[
  	CardComponent, CardListComponent
  ]
})
export class SharedModule { }
