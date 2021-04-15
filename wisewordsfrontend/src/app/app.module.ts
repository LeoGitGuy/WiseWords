import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EntryComponentComponent } from './entry-component/entry-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '*', component: AppComponent}
    ], { useHash: true}),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
