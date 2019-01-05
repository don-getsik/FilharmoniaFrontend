import {NgModule} from '@angular/core';
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
import { ConcertComponent } from './crudModels/concert/concert.component';
import { PerformerComponent } from './crudModels/performer/performer.component';
import { TicketComponent } from './crudModels/ticket/ticket.component';
import { DiscountComponent } from './crudModels/discount/discount.component';
import { ConcertAddComponent } from './crudModels/concert/concert-add/concert-add.component';
import { ConcertEditComponent } from './crudModels/concert/concert-edit/concert-edit.component';
import { DiscountAddComponent } from './crudModels/discount/discount-add/discount-add.component';
import { DiscountEditComponent } from './crudModels/discount/discount-edit/discount-edit.component';
import { PerformerAddComponent } from './crudModels/performer/performer-add/performer-add.component';
import { PerformerEditComponent } from './crudModels/performer/performer-edit/performer-edit.component';
import { SelectConcertComponent } from './select-concert/select-concert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BuyTicketComponent,
        CrudComponent,
        ConcertComponent,
        PerformerComponent,
        TicketComponent,
        DiscountComponent,
        ConcertAddComponent,
        ConcertEditComponent,
        DiscountAddComponent,
        DiscountEditComponent,
        PerformerAddComponent,
        PerformerEditComponent,
        SelectConcertComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        //{ provide: LOCALE_ID, useValue: 'pl'}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
