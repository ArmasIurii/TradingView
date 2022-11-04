import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component'; 
import { MainPageComponent } from './components/main-page/main-page.component'; 

const routes: Routes = [
  {path:'', redirectTo :'#', pathMatch:'full'},
  {path:'coin-list', component: MainPageComponent},
  {path:'coin-detail/:id', component: CoinDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
