import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';
import {CrudComponent} from './crud/crud.component';
import {BuyTicketComponent} from './buy-ticket/buy-ticket.component';
import {ConcertComponent} from './crudModels/concert/concert.component';
import {PerformerComponent} from './crudModels/performer/performer.component';
import {DiscountComponent} from './crudModels/discount/discount.component';
import {ConcertEditComponent} from './crudModels/concert/concert-edit/concert-edit.component';
import {ConcertAddComponent} from './crudModels/concert/concert-add/concert-add.component';
import {DiscountEditComponent} from './crudModels/discount/discount-edit/discount-edit.component';
import {DiscountAddComponent} from './crudModels/discount/discount-add/discount-add.component';
import {PerformerAddComponent} from './crudModels/performer/performer-add/performer-add.component';
import {PerformerEditComponent} from './crudModels/performer/performer-edit/performer-edit.component';
import {SelectConcertComponent} from './select-concert/select-concert.component';
import {PieceOfMusicComponent} from './crudModels/piece-of-music/piece-of-music.component';
import {PieceOfMusicEditComponent} from './crudModels/piece-of-music/piece-of-music-edit/piece-of-music-edit.component';
import {PieceOfMusicAddComponent} from './crudModels/piece-of-music/piece-of-music-add/piece-of-music-add.component';
import {AproveConcertComponent} from './aprove-concert/aprove-concert.component';
import {MonthSummaryComponent} from './month-summary/month-summary.component';
import {ConcertSummaryComponent} from './concert-summary/concert-summary.component';
import {PaymentCompleteComponent} from './payment-complete/payment-complete.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'approve', component: AproveConcertComponent, canActivate: [AuthGuard]},
  {path: 'monthly', component: MonthSummaryComponent, canActivate: [AuthGuard]},
  {path: 'concertSummary', component: ConcertSummaryComponent, canActivate: [AuthGuard]},
  {path: 'payment-complete', component: PaymentCompleteComponent},
  {path: 'buy', component: BuyTicketComponent},
  {
    path: 'manage', component: CrudComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'Transaction', pathMatch: 'full'},
      {path: 'Concert', component: ConcertComponent},
      {path: 'Performer', component: PerformerComponent},
      {path: 'Discount', component: DiscountComponent},
      {path: 'PieceOfMusic', component: PieceOfMusicComponent},
    ]
  },
  {path: 'concerts', component: SelectConcertComponent},
  {path: 'concerts/:id', component: BuyTicketComponent},

  {path: 'manage/Concert/edit/:id', component: ConcertEditComponent, canActivate: [AuthGuard]},
  {path: 'manage/Concert/add', component: ConcertAddComponent, canActivate: [AuthGuard]},
  {path: 'manage/Discount/edit/:id', component: DiscountEditComponent, canActivate: [AuthGuard]},
  {path: 'manage/Discount/add', component: DiscountAddComponent, canActivate: [AuthGuard]},
  {path: 'manage/Performer/edit/:id', component: PerformerEditComponent, canActivate: [AuthGuard]},
  {path: 'manage/Performer/add', component: PerformerAddComponent, canActivate: [AuthGuard]},
  {path: 'manage/PieceOfMusic/edit/:id', component: PieceOfMusicEditComponent, canActivate: [AuthGuard]},
  {path: 'manage/PieceOfMusic/add', component: PieceOfMusicAddComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
