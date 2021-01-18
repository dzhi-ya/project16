import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { TextMaskModule } from 'angular2-text-mask';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { CalculateAgePipe } from 'src/app/shared/pipes/calculate-age.pipe';
import { TypePipe } from 'src/app/shared/pipes/type.pipe';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';


@NgModule({
  declarations: [UsersComponent, UserEditComponent, UserListComponent, 
    SearchPipe, CalculateAgePipe, TypePipe, SortPipe],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule, TextMaskModule],
})
export class UsersModule {}
