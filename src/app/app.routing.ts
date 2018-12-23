import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {BudgetComponent} from './crudModels/budget/budget.component';
import {CrudComponent} from './crud/crud.component';
import {BuyTicketComponent} from './buy-ticket/buy-ticket.component';
import {ConcertComponent} from './crudModels/concert/concert.component';
import {PieceOfMusicComponent} from './crudModels/piece-of-music/piece-of-music.component';
import {PerformerComponent} from './crudModels/performer/performer.component';
import {TicketComponent} from './crudModels/ticket/ticket.component';
import {UserComponent} from './crudModels/user/user.component';
import {DiscountComponent} from './crudModels/discount/discount.component';
import {BudgetEditComponent} from './crudModels/budget/budget-edit/budget-edit.component';
import {BudgetAddComponent} from './crudModels/budget/budget-add/budget-add.component';
import {ConcertEditComponent} from './crudModels/concert/concert-edit/concert-edit.component';
import {ConcertAddComponent} from './crudModels/concert/concert-add/concert-add.component';
import {DiscountEditComponent} from './crudModels/discount/discount-edit/discount-edit.component';
import {DiscountAddComponent} from './crudModels/discount/discount-add/discount-add.component';
import {PerformerAddComponent} from './crudModels/performer/performer-add/performer-add.component';
import {PerformerEditComponent} from './crudModels/performer/performer-edit/performer-edit.component';
import {PieceOfMusicEditComponent} from './crudModels/piece-of-music/piece-of-music-edit/piece-of-music-edit.component';
import {PieceOfMusicAddComponent} from './crudModels/piece-of-music/piece-of-music-add/piece-of-music-add.component';
import {UserEditComponent} from './crudModels/user/user-edit/user-edit.component';
import {UserAddComponent} from './crudModels/user/user-add/user-add.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'buy', component: BuyTicketComponent},
  {
    path: 'manage', component: CrudComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'Transaction', pathMatch: 'full'},
      {path: 'Transaction', component: BudgetComponent},
      {path: 'Concert', component: ConcertComponent},
      {path: 'PieceOfMusic', component: PieceOfMusicComponent},
      {path: 'Performer', component: PerformerComponent},
      {path: 'Ticket', component: TicketComponent},
      {path: 'Discount', component: DiscountComponent},
      {path: 'User', component: UserComponent}
    ]
  },

  {path: 'manage/Transaction/:id', component: BudgetEditComponent},
  {path: 'manage/Transaction/add', component: BudgetAddComponent},
  {path: 'manage/Concert/:id', component: ConcertEditComponent},
  {path: 'manage/Concert/add', component: ConcertAddComponent},
  {path: 'manage/Discount/:id', component: DiscountEditComponent},
  {path: 'manage/Discount/add', component: DiscountAddComponent},
  {path: 'manage/Performer/:id', component: PerformerEditComponent},
  {path: 'manage/Performer/add', component: PerformerAddComponent},
  {path: 'manage/PieceOfMusic/:id', component: PieceOfMusicEditComponent},
  {path: 'manage/PieceOfMusic/add', component: PieceOfMusicAddComponent},
  {path: 'manage/User/:id', component: UserEditComponent},
  {path: 'manage/User/add', component: UserAddComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
