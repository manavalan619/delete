import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrappComponent } from './bootstrapp.component';
import { JwPaginationComponent } from 'jw-angular-pagination';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: BootstrappComponent }
    ]),

  ],
  declarations: [
    BootstrappComponent,
    JwPaginationComponent
  ]

})
export class GetallModule { }
