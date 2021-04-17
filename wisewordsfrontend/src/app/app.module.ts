import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbChatModule, NbListModule, NbCardModule, NbSelectModule, NbSelectComponent, NbCheckboxModule, NbRadioModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EntryComponentComponent } from './entry-component/entry-component.component';
import { OptionComponent } from './option-component/option.component';
import { LanguagesComponent } from './languages/languages.component';
import { VoicerecorderComponentComponent } from './voicerecorder-component/voicerecorder-component.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent,
    OptionComponent,
    LanguagesComponent,
    VoicerecorderComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '*', component: AppComponent}
    ], { useHash: true}),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'voiceline' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbChatModule,
    NbListModule,
    NbCardModule,
    NbCheckboxModule,
    NbSelectModule,
    NbRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //export class PageModule { }
