import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositeComponent } from './deposite/deposite.component';
import { CreateComponent } from './create/create.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositeComponent,
    CreateComponent,
    WithdrawComponent,
    FundtransferComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
