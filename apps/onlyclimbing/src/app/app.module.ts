import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  NavigationActionTiming,
  routerReducer,
  RouterState,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CustomSerializer } from './custom-route-serializer';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PreActivation,
      serializer: CustomSerializer,
      routerState: RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
