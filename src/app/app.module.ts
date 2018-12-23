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
        BudgetAddComponent
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
