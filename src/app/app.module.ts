import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { CrudComponent } from './crud/crud.component';
import { ConcertComponent } from './crudModels/concert/concert.component';
import { PerformerComponent } from './crudModels/performer/performer.component';
import { DiscountComponent } from './crudModels/discount/discount.component';
import { ConcertAddComponent } from './crudModels/concert/concert-add/concert-add.component';
import { ConcertEditComponent } from './crudModels/concert/concert-edit/concert-edit.component';
import { DiscountAddComponent } from './crudModels/discount/discount-add/discount-add.component';
import { DiscountEditComponent } from './crudModels/discount/discount-edit/discount-edit.component';
import { PerformerAddComponent } from './crudModels/performer/performer-add/performer-add.component';
import { PerformerEditComponent } from './crudModels/performer/performer-edit/performer-edit.component';
import { SelectConcertComponent } from './select-concert/select-concert.component';
import { FormsModule } from '@angular/forms';
import { PieceOfMusicComponent } from './crudModels/piece-of-music/piece-of-music.component';
import { PieceOfMusicEditComponent } from './crudModels/piece-of-music/piece-of-music-edit/piece-of-music-edit.component';
import { PieceOfMusicAddComponent } from './crudModels/piece-of-music/piece-of-music-add/piece-of-music-add.component';
import { AproveConcertComponent } from './aprove-concert/aprove-concert.component';

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
        BuyTicketComponent,
        CrudComponent,
        ConcertComponent,
        PerformerComponent,
        DiscountComponent,
        ConcertAddComponent,
        ConcertEditComponent,
        DiscountAddComponent,
        DiscountEditComponent,
        PerformerAddComponent,
        PerformerEditComponent,
        SelectConcertComponent,
        PieceOfMusicComponent,
        PieceOfMusicEditComponent,
        PieceOfMusicAddComponent,
        AproveConcertComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

        // provider used to create fake backend
        //{ provide: LOCALE_ID, useValue: 'pl'}
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
