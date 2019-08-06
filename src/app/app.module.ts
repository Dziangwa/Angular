import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { CuriosityDetailComponent } from './curiosity-detail/curiosity-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { ElementyComponent } from './elementy/elementy.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { TemporaryComponent } from './temporary/temporary.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { AppPowerBoosterComponent } from './app-power-booster/app-power-booster.component';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color/reactive-favorite-color.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    CuriosityComponent,
    CuriosityDetailComponent,
    CustomersComponent,
    PopupComponent,
    ElementyComponent,
    HighlightDirective,
    UnlessDirective,
    HeroBirthdayComponent,
    TemporaryComponent,
    ExponentialStrengthPipe,
    AppPowerBoosterComponent,
    ReactiveFavoriteColorComponent,
    ProfileEditorComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule { }
