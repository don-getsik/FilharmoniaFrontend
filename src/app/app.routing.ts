import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {CrudComponent} from './crud/crud.component';
import {BuyTicketComponent} from './buy-ticket/buy-ticket.component';
import {ConcertComponent} from './crudModels/concert/concert.component';
import {PerformerComponent} from './crudModels/performer/performer.component';
import {TicketComponent} from './crudModels/ticket/ticket.component';
import {DiscountComponent} from './crudModels/discount/discount.component';
import {ConcertEditComponent} from './crudModels/concert/concert-edit/concert-edit.component';
import {ConcertAddComponent} from './crudModels/concert/concert-add/concert-add.component';
import {DiscountEditComponent} from './crudModels/discount/discount-edit/discount-edit.component';
import {DiscountAddComponent} from './crudModels/discount/discount-add/discount-add.component';
import {PerformerAddComponent} from './crudModels/performer/performer-add/performer-add.component';
import {PerformerEditComponent} from './crudModels/performer/performer-edit/performer-edit.component';
import {SelectConcertComponent} from './select-concert/select-concert.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'buy', component: BuyTicketComponent},
  {
    path: 'manage', component: CrudComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'Transaction', pathMatch: 'full'},
      {path: 'Concert', component: ConcertComponent},
      {path: 'Performer', component: PerformerComponent},
      {path: 'Ticket', component: TicketComponent},
      {path: 'Discount', component: DiscountComponent},
    ]
  },
  {path: 'concerts', component: SelectConcertComponent},
  {path: 'concerts/:id', component: BuyTicketComponent},

  {path: 'manage/Concert/edit/:id', component: ConcertEditComponent},
  {path: 'manage/Concert/add', component: ConcertAddComponent},
  {path: 'manage/Discount/edit/:id', component: DiscountEditComponent},
  {path: 'manage/Discount/add', component: DiscountAddComponent},
  {path: 'manage/Performer/edit/:id', component: PerformerEditComponent},
  {path: 'manage/Performer/add', component: PerformerAddComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
