import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TableListComponent } from './table-list/table-list.component';
import { ModalCreateClientComponent } from './modal-create-client/modal-create-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { SensumViewComponent } from './sensum-view/sensum-view.component';
import { BostedViewComponent } from './bosted-view/bosted-view.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'sensum', component: SensumViewComponent },
  { path: 'bosted', component: BostedViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableListComponent,
    ModalCreateClientComponent,
    MainViewComponent,
    SensumViewComponent,
    BostedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports:[RouterModule, 
    ReactiveFormsModule],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
