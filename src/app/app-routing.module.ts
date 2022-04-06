import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecepeDetailsComponent } from './Recepes/recepe-details/recepe-details.component';
import { RecepeEditComponent } from './Recepes/recepe-edit/recepe-edit.component';

import { RecepesListComponent } from './Recepes/recepes-list/recepes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoute : Routes= [
  // { path:'',component:RecepesItemComponent ,pathMatch:'full' },
  { path:'recepe',component:RecepesListComponent, children:[
        {path:':idx',component:RecepeDetailsComponent},
        {path:'new',component:RecepeEditComponent}
  ]  },
  { path:'shopping',component:ShoppingListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
