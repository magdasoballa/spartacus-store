import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule, StarRatingModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomPdpModule } from './custom-pdp/custom-pdp.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomPdpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
