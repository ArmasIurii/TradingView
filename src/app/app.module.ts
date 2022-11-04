import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  NgChartsModule} from 'ng2-charts'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component'; 
import { MainPageComponent } from './components/main-page/main-page.component'; 
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ListTableComponent } from './components/list-table/list-table.component'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MainPageComponent,
    ListTableComponent,
    CoinDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
