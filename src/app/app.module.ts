import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
//import { CookieService } from "ngx-cookie-service";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RetailersComponent } from './retailers/retailers.component';
import { ClicksComponent } from './clicks/clicks.component';
import { CategoriesComponent } from './categories/categories.component';
import { CountriesComponent } from './countries/countries.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PaymentsComponent } from './payments/payments.component';
import { Money2userComponent } from './money2user/money2user.component';
import { CsvImportComponent } from './csv-import/csv-import.component';
import { AffnetworksComponent } from './affnetworks/affnetworks.component';
import { PmethodsComponent } from './pmethods/pmethods.component';
import { NewsComponent } from './news/news.component';
import { ContentComponent } from './content/content.component';
import { EtemplatesComponent } from './etemplates/etemplates.component';
import { Email2usersComponent } from './email2users/email2users.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { CouponsComponent } from './coupons/coupons.component';
const appRoutes: Routes= [
{path:'login',component:LoginComponent},
{
path:'admin', component:HomeComponent,
children:[
    {path:'users',component:UsersComponent},
    {path:'retailers',component:RetailersComponent},
    {path:'clicks',component:ClicksComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'countries',component:CountriesComponent},
    {path:'reviews',component:ReviewsComponent},
    {path:'payments',component:PaymentsComponent},
    {path:'money2user',component:Money2userComponent},
    {path:'csv-import',component:CsvImportComponent},
    {path:'affnetworks',component:AffnetworksComponent},
    {path:'pmethods',component:PmethodsComponent},    
    {path:'news',component:NewsComponent},
    {path:'content',component:ContentComponent},
    {path:'etemplates',component:EtemplatesComponent},
    {path:'email2users',component:Email2usersComponent},
    {path:'settings',component:SettingsComponent},
    {path:'add-user',component:AddUserComponent},
    {path:'coupons',component:CouponsComponent}

    ]
},
{path:'',redirectTo:'/login', pathMatch:'full'},
{path:'**', redirectTo:'/login', pathMatch:'full'}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RetailersComponent,
    ClicksComponent,
    CategoriesComponent,
    CountriesComponent,
    ReviewsComponent,
    PaymentsComponent,
    Money2userComponent,
    CsvImportComponent,
    AffnetworksComponent,
    PmethodsComponent,
    NewsComponent,
    ContentComponent,
    EtemplatesComponent,
    Email2usersComponent,
    SettingsComponent,

    UsersComponent,

    AddUserComponent,

    CouponsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
