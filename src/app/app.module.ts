import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { CrudComponent } from './crud/crud.component';
import { BudgetComponent } from './crudModels/budget/budget.component';
import { ConcertComponent } from './crudModels/concert/concert.component';
import { PieceOfMusicComponent } from './crudModels/piece-of-music/piece-of-music.component';
import { PerformerComponent } from './crudModels/performer/performer.component';
import { TicketComponent } from './crudModels/ticket/ticket.component';
import { UserComponent } from './crudModels/user/user.component';
import { DiscountComponent } from './crudModels/discount/discount.component';
import {BudgetService} from './crudServices/budget.service';
import { BudgetEditComponent } from './crudModels/budget/budget-edit/budget-edit.component';
import { BudgetAddComponent } from './crudModels/budget/budget-add/budget-add.component';
import { ConcertAddComponent } from './crudModels/concert/concert-add/concert-add.component';
import { ConcertEditComponent } from './crudModels/concert/concert-edit/concert-edit.component';
import { DiscountAddComponent } from './crudModels/discount/discount-add/discount-add.component';
import { DiscountEditComponent } from './crudModels/discount/discount-edit/discount-edit.component';
import { PerformerAddComponent } from './crudModels/performer/performer-add/performer-add.component';
import { PerformerEditComponent } from './crudModels/performer/performer-edit/performer-edit.component';
import { PieceOfMusicAddComponent } from './crudModels/piece-of-music/piece-of-music-add/piece-of-music-add.component';
import { PieceOfMusicEditComponent } from './crudModels/piece-of-music/piece-of-music-edit/piece-of-music-edit.component';
import { UserAddComponent } from './crudModels/user/user-add/user-add.component';
import { UserEditComponent } from './crudModels/user/user-edit/user-edit.component';
import { SelectConcertComponent } from './select-concert/select-concert.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BuyTicketComponent,
        CrudComponent,
        BudgetComponent,
        ConcertComponent,
        PieceOfMusicComponent,
        PerformerComponent,
        TicketComponent,
        UserComponent,
        DiscountComponent,
        BudgetEditComponent,
        BudgetAddComponent,
        ConcertAddComponent,
        ConcertEditComponent,
        DiscountAddComponent,
        DiscountEditComponent,
        PerformerAddComponent,
        PerformerEditComponent,
        PieceOfMusicAddComponent,
        PieceOfMusicEditComponent,
        UserAddComponent,
        UserEditComponent,
        SelectConcertComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        BudgetService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        { provide: LOCALE_ID, useValue: 'pl'}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
