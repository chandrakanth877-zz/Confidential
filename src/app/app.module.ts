import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ConfidentialResolverService } from "./ConfidentialResolver/confidential-resolver.service";
import { environment } from "../environments/environment.prod";


import { AppComponent } from './mainComponent/app.component';
import { rootRoute } from '@angular/router/src/router_module';
import { HomeComponent } from './home/home.component';
import { ConfidentialComponent } from './confidential/confidential.component';
import { ConfidentialFormInformationComponent } from './confidential-form-information/confidential-form-information.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { EducationComponent } from './education/education.component';
import { ConfidentialService } from "./ConfidentialFormService/confidential.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfidentialComponent,
    ConfidentialFormInformationComponent,
    ContactDetailsComponent,
    AuthorizationComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'confidential'),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch:'full' },
      { 
        path: 'confidential', 
        component: ConfidentialComponent,
        resolve:{formModel:ConfidentialResolverService},
        children:[
          {
            path:'personal',component:ConfidentialFormInformationComponent
          },
          {
            path:'contact',component:ContactDetailsComponent
          },
          {
            path:'work',component:AuthorizationComponent
          },
          {
            path:'education',component:EducationComponent
          },
          {
            path:'', redirectTo:'personal',pathMatch:'full'
          },
          { path: '**', redirectTo:'personal' }
        ] 
      },
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: '**', redirectTo:'home' }
    ])
  ],
  providers: [
    ConfidentialService,
    ConfidentialResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
