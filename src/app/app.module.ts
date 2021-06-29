import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserComponent, UsersComponent} from './components';
import {FormsModule} from "@angular/forms";
import {CustomInterceptorService} from "./services";

// import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBxxcocNIZEQRdSP5cDNYK_D6MfhfPSGzg'
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
