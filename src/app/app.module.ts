import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Recepes } from './Recepes/Recepes.component';
import {HttpClientModule} from '@angular/common/http'

import { ShopingEditComponent } from './shopping-list/shoping-edit/shoping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepesListComponent } from './Recepes/recepes-list/recepes-list.component';

import { HeaderComponent } from './header/header.component';
import { RecepeDetailsComponent } from './Recepes/recepe-details/recepe-details.component';
import { FormsModule } from '@angular/forms';
import { BasicDirective } from './shopping-list/Basic directive/shopping-list.BasicDirective';
import { betterDirective } from './shopping-list/Better directive/shopping-list.Better-style-Directive';
import { LoggerService } from './shared/services';

import { shoppingListService } from './shopping-list/shoppingList.service';
import { dataStorageService } from './shared/data-storage.service';
import { recepeListService } from './Recepes/recepeList.service';
import { RecepeEditComponent } from './Recepes/recepe-edit/recepe-edit.component';


 



@NgModule({
  declarations: [
    AppComponent,
    Recepes,
    ShopingEditComponent,
    ShoppingListComponent,
    RecepesListComponent,
    
    HeaderComponent,
    RecepeDetailsComponent,
    BasicDirective,
    betterDirective,
    RecepesListComponent,
    RecepeEditComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
   
    
  ],
  // yha provider me services use kr skte hai
  providers: [dataStorageService,recepeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
